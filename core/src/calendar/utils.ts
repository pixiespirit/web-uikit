import chunks from 'lodash.chunk';
import { isSameDate, toDateMonthYear } from '@/calendar/date-utils';

export const getAllDateOfMonth = (date: Date): Array<Date> => {
  const [, month, year] = toDateMonthYear(date);
  const dates: Array<Date> = [];
  const currentDate = new Date(year, month, 1, 0, 0, 0, 0);
  while (currentDate.getMonth() === month) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dates;
};

export const includesDate = (
  dates: Array<Date> | undefined,
  date: Date
): boolean => {
  return (
    !!dates &&
    dates.some((shouldBeHighlight) => isSameDate(shouldBeHighlight, date))
  );
};

export const toCalendarMatrix = (
  dates: Array<Date>
): Array<Array<Date | undefined>> => {
  if (dates.length === 0) {
    return [];
  }

  const calendar: Array<Date | undefined> = [];

  // We will have slots which is belonged to the previous month
  // Then, the calendar should be offsetted by that slots with undefined
  const firstDateOfMonth = dates[0];
  for (let i = 0; i < firstDateOfMonth.getDay(); i++) {
    calendar.push(undefined);
  }

  // Add dates to calendar matrix
  calendar.push(...dates);

  // Now, the matrix is currently flat, it should be split into chunks, each
  // chunk contains 7 days
  const calendarMatrix: Array<Array<Date | undefined>> = chunks<
    Date | undefined
  >(calendar, 7);

  // The calendar matrix is required to be filled fully
  // To that, the last row should be filled
  const nRows = calendarMatrix.length;
  calendarMatrix[nRows - 1].push(
    ...new Array(7 - calendarMatrix[nRows - 1].length).fill(undefined)
  );

  return calendarMatrix;
};
