import { CalendarWeekStart } from '@/constants';

import { countWeeksInMonth } from '../countWeeksInMonth';

describe('Testing the countWeeksInMonth function', () => {
  it('Should work correctly if there are six weeks in a month', () => {
    expect(countWeeksInMonth(new Date(2024, 8, 1), CalendarWeekStart.MONDAY)).toBe(6);
  });

  it('Should work correctly if there are five weeks in a month', () => {
    expect(countWeeksInMonth(new Date(2024, 9, 1), CalendarWeekStart.MONDAY)).toBe(5);
  });

  it('Should work correctly if the start of the week is set to Sunday', () => {
    expect(countWeeksInMonth(new Date(2024, 2, 1), CalendarWeekStart.SUNDAY)).toBe(6);
    expect(countWeeksInMonth(new Date(2024, 3, 1), CalendarWeekStart.SUNDAY)).toBe(5);
  });
});
