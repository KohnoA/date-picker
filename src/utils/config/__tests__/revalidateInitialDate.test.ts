import { revalidateInitialDate } from '../revalidateInitialDate';

describe('Testing revalidateIntialDate function', () => {
  const min = new Date(2024, 0, 1);
  const max = new Date(2024, 1, 1);

  it('If the initial date value is correct, no changes are made', () => {
    const initialDate = new Date(2024, 0, 20);
    const result = revalidateInitialDate({ initialDate, min, max });

    expect(result.initialDate).toEqual(initialDate);
  });

  it('If the initial date value is exceeded, it becomes equal to the maximum date', () => {
    const initialDate = new Date(2024, 1, 2);
    const result = revalidateInitialDate({ initialDate, min, max });

    expect(result.initialDate).toEqual(max);
  });

  it('If the initial date value is less, it becomes equal to the minimum date', () => {
    const initialDate = new Date(2023, 11, 1);
    const result = revalidateInitialDate({ initialDate, min, max });

    expect(result.initialDate).toEqual(min);
  });
});
