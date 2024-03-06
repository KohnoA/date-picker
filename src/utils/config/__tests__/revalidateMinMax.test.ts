import { revalidateMinMax } from '../revalidateMinMax';

describe('Testing the revalidateMinMax function', () => {
  it('If the range is correct it should not change the value', () => {
    const max = new Date(2024, 1, 1);
    const min = new Date(2024, 0, 1);
    const config = { min, max };
    const result = revalidateMinMax(config);

    expect(result.min).toEqual(min);
    expect(result.max).toEqual(max);
  });

  it('If the range is incorrect, the value is swapped', () => {
    const max = new Date(2024, 0, 1);
    const min = new Date(2024, 1, 1);
    const config = { min, max };
    const result = revalidateMinMax(config);

    expect(result.min).toEqual(max);
    expect(result.max).toEqual(min);
  });
});
