import { DayType } from '@/types';

class HolidayDataBase {
  private holidays: number[];
  private static instance: HolidayDataBase;

  private constructor() {
    this.holidays = [
      new Date(2024, 3, 15).getTime(),
      new Date(2024, 3, 2).getTime(),
      new Date(2024, 1, 1).getTime(),
    ];
  }

  public static getInstance() {
    if (HolidayDataBase.instance === null) {
      this.instance = new HolidayDataBase();
    }

    return HolidayDataBase.instance;
  }

  public checkDay(day: DayType) {
    day.isHoliday = this.holidays.includes(day.timestamp);

    return day;
  }
}

export const holidays = HolidayDataBase.getInstance();
