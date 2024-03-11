import { HOLIDAYS } from '@/constants/holidays';

class HolidayDataBase {
  private holidays: typeof HOLIDAYS;
  private static instance: HolidayDataBase | null = null;

  private constructor() {
    this.holidays = HOLIDAYS;
  }

  public static getInstance() {
    if (HolidayDataBase.instance === null) {
      HolidayDataBase.instance = new HolidayDataBase();
    }

    return HolidayDataBase.instance;
  }

  public checkDay(day: number, month: number) {
    return this.holidays.some((holiday) => holiday.day === day && holiday.month === month);
  }
}

export const holidays = HolidayDataBase.getInstance();
