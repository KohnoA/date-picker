import { revalidateDateRange } from '../revalidateDateRange';

describe('Testing the revalidateDateRange function', () => {
  const min = new Date(2024, 0, 1);
  const max = new Date(2024, 1, 1);

  it('Should not change value unless range is exceeded', () => {
    const initialStartDate = new Date(2024, 0, 5);
    const initialEndDate = new Date(2024, 0, 10);
    const result = revalidateDateRange({ initialStartDate, initialEndDate, min, max });

    expect(result.initialStartDate).toEqual(initialStartDate);
    expect(result.initialEndDate).toEqual(initialEndDate);
  });

  it('The start date must be equal to the minimum if it is less', () => {
    const initialStartDate = new Date(2023, 0, 5);
    const initialEndDate = new Date(2024, 0, 10);
    const result = revalidateDateRange({ initialStartDate, initialEndDate, min, max });

    expect(result.initialStartDate).toEqual(min);
    expect(result.initialEndDate).toEqual(initialEndDate);
  });

  it('The end date must be equal to the maximum if it is greater', () => {
    const initialStartDate = new Date(2024, 0, 5);
    const initialEndDate = new Date(2025, 0, 10);
    const result = revalidateDateRange({ initialStartDate, initialEndDate, min, max });

    expect(result.initialStartDate).toEqual(initialStartDate);
    expect(result.initialEndDate).toEqual(max);
  });

  it('The start date must be equal to the end date, if it is greater', () => {
    const initialStartDate = new Date(2024, 0, 15);
    const initialEndDate = new Date(2024, 0, 10);
    const result = revalidateDateRange({ initialStartDate, initialEndDate });

    expect(result.initialStartDate).toEqual(initialEndDate);
    expect(result.initialEndDate).toEqual(initialStartDate);
  });
});
