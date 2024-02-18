import { HOLIDAYS } from '@/constants/holidays';
import { DayType } from '@/types';

class HolidayDataBase {
  private holidays: number[];
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

  public checkDay(day: DayType) {
    day.isHoliday = this.holidays.includes(day.timestamp);

    return day;
  }
}

export const holidays = HolidayDataBase.getInstance();
