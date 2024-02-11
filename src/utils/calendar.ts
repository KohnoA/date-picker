import { WEEK_DAYS_NAME } from '@/constants';
import { DayType } from '@/types';

export function generateCalendarData(currentDate: Date): DayType[] {
  const generateDaysData = (
    year: number,
    month: number,
    start: number,
    end: number,
    options?: { isCurrentMonth: boolean },
  ) =>
    new Array(end - start + 1).fill(start).map((_, index) => {
      const dayDate = new Date(year, month, start + index);

      const day = dayDate.getDate();
      const timestamp = dayDate.getTime();
      const weekDay = WEEK_DAYS_NAME[dayDate.getDay()];
      const isWeekend = ['Su', 'Sa'].includes(weekDay);

      return {
        day,
        weekDay,
        timestamp,
        isCurrentMonth: options?.isCurrentMonth ?? false,
        todos: null,
        isWeekend,
        isHoliday: false,
        isActive: false,
      };
    });

  const countDaysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0,
  ).getDate();
  const firstWeekDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1,
  ).getDay();

  const countDaysInPrevMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    0,
  ).getDate();

  const endOfPrevMonthData = generateDaysData(
    currentDate.getFullYear(),
    currentDate.getMonth() - 1,
    countDaysInPrevMonth - (7 - firstWeekDayOfMonth),
    countDaysInPrevMonth,
  );
  const currentMonthData = generateDaysData(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1,
    countDaysInMonth,
    { isCurrentMonth: true },
  );

  const test = [...endOfPrevMonthData, ...currentMonthData];

  const startOfNextMonthData = generateDaysData(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    1,
    42 - test.length,
  );

  return [...test, ...startOfNextMonthData];
}
