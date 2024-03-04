import { DateFormats } from '@/constants';

import { timestampToDateFormat } from '../timestampToDateFormat';

describe('Testing the timestampToDateFromat function', () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  it('Should work with primary format', () => {
    const result = timestampToDateFormat(date.getTime(), DateFormats.PRIMARY);
    const correctResult = `${day}/${month}/${year}`;

    expect(result).toBe(correctResult);
  });

  it('Should work with secondary format', () => {
    const result = timestampToDateFormat(date.getTime(), DateFormats.SECONDARY);
    const correctResult = `${month}/${day}/${year}`;

    expect(result).toBe(correctResult);
  });
});
