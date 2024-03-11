export function checkMinDate(date: Date | number, min?: Date) {
  if (typeof date === 'number') {
    return !!min && date < min.getTime();
  }

  return !!min && date.getTime() < min.getTime();
}

export function checkMaxDate(date: Date | number, max?: Date) {
  if (typeof date === 'number') {
    return !!max && date > max.getTime();
  }

  return !!max && date.getTime() > max.getTime();
}
