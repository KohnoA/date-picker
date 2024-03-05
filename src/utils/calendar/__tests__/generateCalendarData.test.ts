import { CalendarWeekStart, WEEK_DAYS_NAME } from '@/constants';

import { generateCalendarData } from '../generateCalendarData';

describe('Testing the generateCalendarData function', () => {
  it('Should have the correct number of elements', () => {
    expect(generateCalendarData(new Date(2024, 3, 1), CalendarWeekStart.SUNDAY).length).toBe(42);
  });

  it('Should have the right first day', () => {
    const startWithSunday = generateCalendarData(new Date(2024, 3, 1), CalendarWeekStart.SUNDAY);
    const startWithMonday = generateCalendarData(new Date(2024, 3, 1), CalendarWeekStart.MONDAY);

    expect(startWithSunday[0].data.weekday).toBe(WEEK_DAYS_NAME[0]);
    expect(startWithMonday[0].data.weekday).toBe(WEEK_DAYS_NAME[1]);
  });

  it('The number of days of the selected month must be correct', () => {
    const calendarData = generateCalendarData(new Date(2024, 2, 1), CalendarWeekStart.SUNDAY);
    const countDaysInMonth = 31;

    expect(calendarData.filter((item) => item.data.isCurrentMonth).length).toBe(countDaysInMonth);
  });

  it('Previous days of the week must be filled with the previous month', () => {
    const date = new Date(2024, 2, 1);
    const calendarData = generateCalendarData(date, CalendarWeekStart.SUNDAY);

    expect(calendarData[date.getDay()].data.day).toBe(1);
  });
});
