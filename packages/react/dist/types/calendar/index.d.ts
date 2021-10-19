import React from 'react';
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
    classOverrides?: CalendarOverrides;
}
export declare const Calendar: React.FC<CalendarProps>;
