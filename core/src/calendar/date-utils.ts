import { validateMonth } from '@/calendar/date-tests';
import { MonthString } from '@/calendar/constants';

export const toMonthString = (month: number) => {
  validateMonth(month);
  return MonthString[month];
};

export const toDateMonthYear = (date: Date): [number, number, number] => {
  return [date.getDate(), date.getMonth(), date.getFullYear()];
};

export const isSameDate = (date1: Date, date2: Date): boolean => {
  const [d1, m1, y1] = toDateMonthYear(date1);
  const [d2, m2, y2] = toDateMonthYear(date2);
  return d1 == d2 && m1 == m2 && y1 == y2;
};

// Returns true if date2 is before date1
export const isBefore = (date1: Date, date2: Date) => {
  const [d1, m1, y1] = toDateMonthYear(date1);
  const [d2, m2, y2] = toDateMonthYear(date2);
  if (y2 < y1) return true;
  if (y2 == y1 && m2 < m1) return true;
  return y2 == y1 && m2 == m1 && d2 < d1;
};
