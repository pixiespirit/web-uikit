import React, { useMemo, useState } from 'react';
import s from '@/calendar/styles/calendar.module.css';
import { Label1 } from '@/typography/label';
import {
  getAllDateOfMonth,
  includesDate,
  toCalendarMatrix
} from '@/calendar/utils';
import {
  ArrowUpOutline,
  ArrowDownOutline,
  ArrowLeftOutline,
  ArrowRightOutline
} from '@pixiepkg/icon';
import { isBefore, isSameDate, toMonthString } from '@/calendar/date-utils';

export interface CalendarOverrides {
  container?: string;
  calendarCell?: string;
}

export interface CalendarProps {
  date?: Date;
  setDate?: (value: Date) => void;

  collapse?: boolean;
  showCollapseButton?: boolean;
  highlightDates?: Array<Date>;
  disablePastDates?: boolean;

  // Styling Overrides
  classOverrides?: CalendarOverrides;
}

const getClass = (props: CalendarProps) => {
  const classes: Array<string> = [s.wrapper];

  if (props.classOverrides?.container) {
    classes.push(props.classOverrides.container);
  }

  return classes.join(' ');
};

const getCellClass = (
  props: CalendarProps,
  selectedDate: Date,
  calendarDate: Date | undefined
): string => {
  const classes: Array<string> = [s.cell];

  if (props.classOverrides?.calendarCell) {
    classes.push(props.classOverrides.calendarCell);
  }

  if (props.disablePastDates && calendarDate) {
    const today = new Date();
    if (isBefore(today, calendarDate)) {
      classes.push(s.disabled);
    }
  }

  if (!!calendarDate && isSameDate(selectedDate, calendarDate)) {
    classes.push(s.active);
  }

  return classes.join(' ');
};

export const Calendar: React.FC<CalendarProps> = (props) => {
  const selectedDate = useMemo(() => props.date ?? new Date(), [props.date]);

  const [collapse, setCollapse] = useState<boolean>(props.collapse ?? false);

  // timeController is using for switch calendar between months, years
  const [timeController, setTimeController] = useState<Date>(
    new Date(selectedDate)
  );

  const calendar = useMemo(() => {
    // TODO: Re-implement this function to only get week dates if collapse
    const dates = getAllDateOfMonth(timeController);
    const calendarMatrix = toCalendarMatrix(dates);

    // TODO: Remove below code when the above feature was implemented
    if (collapse) {
      const selectedDateRowId = calendarMatrix.findIndex((row) => {
        return row.some((date) => date && isSameDate(selectedDate, date));
      });
      // selectDateRowId will be -1 if can not found selected date in the
      // calendar matrix, so that, it should be zero instead.
      return [calendarMatrix[Math.max(selectedDateRowId, 0)]];
    }

    return calendarMatrix;
  }, [timeController, collapse, selectedDate]);

  const onGoToPreviousMonth = () => {
    timeController.setMonth(timeController.getMonth() - 1);
    setTimeController(new Date(timeController));
  };

  const onGoToNextMonth = () => {
    timeController.setMonth(timeController.getMonth() + 1);
    setTimeController(new Date(timeController));
  };

  const onCellClick = (cell: Date | undefined) => {
    if (cell) {
      props.setDate?.(cell);
    }
  };

  return (
    <div className={getClass(props)}>
      <div className={s.dateSelector}>
        {!collapse && (
          <div className="cursor-pointer" onClick={onGoToPreviousMonth}>
            <ArrowLeftOutline />
          </div>
        )}
        <div className="w-2/3 text-center">
          <Label1 semiBold>
            {toMonthString(timeController.getMonth())}{' '}
            {timeController.getFullYear()}
          </Label1>
        </div>
        {!collapse && (
          <div className="cursor-pointer" onClick={onGoToNextMonth}>
            <ArrowRightOutline />
          </div>
        )}
      </div>

      <div className={s.header}>
        <div className={s.cell}>CN</div>
        <div className={s.cell}>T2</div>
        <div className={s.cell}>T3</div>
        <div className={s.cell}>T4</div>
        <div className={s.cell}>T5</div>
        <div className={s.cell}>T6</div>
        <div className={s.cell}>T7</div>
      </div>

      <div className={s.body}>
        {calendar.map((row, rowIdx) => {
          return (
            <React.Fragment key={rowIdx}>
              {row.map((cell, cellIdx) => {
                return (
                  <div
                    key={rowIdx * 10 + cellIdx}
                    className={getCellClass(props, selectedDate, cell)}
                    onClick={() => onCellClick(cell)}
                  >
                    {cell && cell.getDate()}
                    {cell && includesDate(props.highlightDates, cell) && (
                      <span className={s.badge} />
                    )}
                  </div>
                );
              })}
              <div className={s.break} />
            </React.Fragment>
          );
        })}
      </div>

      {props.showCollapseButton && (
        <div className={s.collapseContainer}>
          <div
            className={s.collapseButton}
            onClick={() => setCollapse(!collapse)}
          >
            {collapse && <ArrowDownOutline />}
            {!collapse && <ArrowUpOutline />}
          </div>
        </div>
      )}
    </div>
  );
};
