export function canRewindPrevMonth(year: number, month: number, min?: Date) {
  const firstDayOfMonthDate = new Date(year, month, 1);

  return min ? firstDayOfMonthDate.getTime() > min.getTime() : true;
}

export function canRewindNextMonth(year: number, month: number, max?: Date) {
  const lastDayOfMonthDate = new Date(year, month + 1, 0);

  return max ? lastDayOfMonthDate.getTime() < max.getTime() : true;
}

export function canRewindPrevYear(year: number, month: number, min?: Date) {
  const prevYear = new Date(year - 1, month, 1);

  return min ? prevYear.getTime() > min.getTime() : true;
}

export function canRewindNextYear(year: number, month: number, max?: Date) {
  const nextYear = new Date(year + 1, month, 1);

  return max ? nextYear.getTime() < max.getTime() : true;
}
