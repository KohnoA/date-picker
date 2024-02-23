export function checkMinDate(date: Date, min?: Date) {
  return !!min && date.getTime() < min.getTime();
}

export function checkMaxDate(date: Date, max?: Date) {
  return !!max && date.getTime() > max.getTime();
}
