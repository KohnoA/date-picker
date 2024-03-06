import { CalendarWeekStart } from '@/constants';

import { generateEndOfPrevMonth } from '../generateEndOfPrevMonth';

describe('Testing the generateEndOfPrevMonth function', () => {
  it('If the month starts from the first day of the week, an empty array should be returned', () => {
    const withSunday = generateEndOfPrevMonth(new Date(2024, 8, 1), CalendarWeekStart.SUNDAY);
    const withMonday = generateEndOfPrevMonth(new Date(2024, 3, 1), CalendarWeekStart.MONDAY);

    expect(withSunday.length).toBe(0);
    expect(withMonday.length).toBe(0);
  });

  it('Should correctly add days from previous month', () => {
    const withSunday = generateEndOfPrevMonth(new Date(2024, 2, 1), CalendarWeekStart.SUNDAY);
    const withMonday = generateEndOfPrevMonth(new Date(2024, 2, 1), CalendarWeekStart.MONDAY);

    expect(withSunday.length).toBe(5);
    expect(withMonday.length).toBe(4);
  });
});
