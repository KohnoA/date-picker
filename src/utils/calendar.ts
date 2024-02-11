import { WEEK_DAYS_NAME } from '@/constants';
import { DayType } from '@/types';

function generateDaysData(
  year: number,
  month: number,
  start: number,
  end: number,
  options?: { isCurrentMonth: boolean },
) {
  const NAMES_OF_WEEKENDS = ['Su', 'Sa'];

  return new Array(end - start + 1).fill(start).map((_, index) => {
    const dayDate = new Date(year, month, start + index);

    const day = dayDate.getDate();
    const timestamp = dayDate.getTime();
    const weekDay = WEEK_DAYS_NAME[dayDate.getDay()];
    const isWeekend = NAMES_OF_WEEKENDS.includes(weekDay);
    const isCurrentMonth = options?.isCurrentMonth ?? false;

    return {
      day,
      weekDay,
      timestamp,
      isCurrentMonth,
      isWeekend,
      todos: null,
      isHoliday: false,
    };
  });
}

export function generateCalendarData(date: Date): DayType[] {
  const NUMBER_OF_CALENDAR_ITEMS = 42;
  const currentDate = new Date(date.getTime());

  currentDate.setMonth(currentDate.getMonth() + 1);
  currentDate.setDate(0);
  const countDaysInCurrentMonth = currentDate.getDate();

  currentDate.setDate(0);
  const countDaysInPrevMonth = currentDate.getDate();

  currentDate.setDate(currentDate.getDate() + 1);
  const startOfVisiblePrevMonth = countDaysInPrevMonth - (currentDate.getDay() - 1);

  const endOfPrevMonthData = generateDaysData(
    currentDate.getFullYear(),
    currentDate.getMonth() - 1,
    startOfVisiblePrevMonth,
    countDaysInPrevMonth,
  );

  const currentMonthData = generateDaysData(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1,
    countDaysInCurrentMonth,
    { isCurrentMonth: true },
  );

  const startOfNextMonthData = generateDaysData(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    1,
    NUMBER_OF_CALENDAR_ITEMS - (endOfPrevMonthData.length + currentMonthData.length),
  );

  return [...endOfPrevMonthData, ...currentMonthData, ...startOfNextMonthData];
}
