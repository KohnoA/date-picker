import { CalendarWeekStart } from '@/constants';

import {
  canGoNextMonth,
  canGoNextWeek,
  canGoNextYear,
  canGoPrevMonth,
  canGoPrevWeek,
  canGoPrevYear,
} from '../canGo';

const min = new Date(2024, 1, 1);
const max = new Date(2024, 5, 10);

describe('Testing the canGoPrevWeek function', () => {
  it('Should return true if you can go back a week', () => {
    expect(canGoPrevWeek(2024, 1, 2, CalendarWeekStart.SUNDAY, min)).toBe(true);
  });

  it('Should work with different start of week options', () => {
    expect(canGoPrevWeek(2024, 1, 2, CalendarWeekStart.MONDAY, min)).toBe(true);
  });

  it(`Should return false if you can't move back a week`, () => {
    expect(canGoPrevWeek(2024, 1, 1, CalendarWeekStart.SUNDAY, min)).toBe(false);
  });

  it('Should return false if no minimum value is passed', () => {
    expect(canGoPrevWeek(2024, 1, 1, CalendarWeekStart.SUNDAY)).toBe(true);
  });
});

describe('Testing the canGoNextWeek function', () => {
  it('Should return true if you can go next week', () => {
    expect(canGoNextWeek(2024, 5, 1, CalendarWeekStart.SUNDAY, max)).toBe(true);
  });

  it('Should work with different start of week options', () => {
    expect(canGoNextWeek(2024, 5, 1, CalendarWeekStart.MONDAY, max)).toBe(true);
  });

  it(`Should return false if you can't move next week`, () => {
    expect(canGoNextWeek(2024, 5, 3, CalendarWeekStart.SUNDAY, max)).toBe(false);
  });

  it('Should return false if no maximum value is passed', () => {
    expect(canGoNextWeek(2024, 5, 1, CalendarWeekStart.SUNDAY)).toBe(true);
  });
});

describe('Testing the canGoPrevMonth function', () => {
  it('Should return true if you can go back a month', () => {
    expect(canGoPrevMonth(2024, 2, min)).toBe(true);
  });

  it(`Should return false if you can't move back a month`, () => {
    expect(canGoPrevMonth(2024, 1, min)).toBe(false);
  });

  it('Should return false if no minimum value is passed', () => {
    expect(canGoPrevMonth(2024, 1)).toBe(true);
  });
});

describe('Testing the canGoNextMonth function', () => {
  it('Should return true if you can go next month', () => {
    expect(canGoNextMonth(2024, 4, max)).toBe(true);
  });

  it(`Should return false if you can't move next month`, () => {
    expect(canGoNextMonth(2024, 5, max)).toBe(false);
  });

  it('Should return false if no maximum value is passed', () => {
    expect(canGoNextMonth(2024, 1)).toBe(true);
  });
});

describe('Testing the canGoPrevYear function', () => {
  it('Should return true if you can go back a year', () => {
    expect(canGoPrevYear(2025, 2, min)).toBe(true);
  });

  it(`Should return false if you can't move back a year`, () => {
    expect(canGoPrevYear(2024, 1, min)).toBe(false);
  });

  it('Should return false if no minimum value is passed', () => {
    expect(canGoPrevYear(2025, 1)).toBe(true);
  });
});

describe('Testing the canGoNextYear function', () => {
  it('Should return true if you can go next year', () => {
    expect(canGoNextYear(2023, 4, max)).toBe(true);
  });

  it(`Should return false if you can't move next year`, () => {
    expect(canGoNextYear(2024, 5, max)).toBe(false);
  });

  it('Should return false if no maximum value is passed', () => {
    expect(canGoNextYear(2023, 1)).toBe(true);
  });
});
