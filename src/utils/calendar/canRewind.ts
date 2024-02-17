export function canRewindPrev(date: Date, min?: Date) {
  const firstDayOfMonthDate = new Date(date.getFullYear(), date.getMonth(), 1);

  return min ? firstDayOfMonthDate.getTime() > min.getTime() : true;
}

export function canRewindNext(date: Date, max?: Date) {
  const lastDayOfMonthDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  return max ? lastDayOfMonthDate.getTime() < max.getTime() : true;
}
