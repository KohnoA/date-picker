import { generateDaysData } from '../generateDaysData';

describe('Testing the generateDaysData function', () => {
  it('The correct number of elements must be created', () => {
    const result = generateDaysData(2024, 1, 1, 20);

    expect(result.length).toBe(20);
  });

  it('Data must have correct numbers', () => {
    const result = generateDaysData(2024, 2, 1, 10);

    expect(result.every((item, index) => item.data.day === index + 1)).toBe(true);
  });

  it('Holidays must be marked', () => {
    const result = generateDaysData(2024, 2, 1, 10);

    expect(result[7].data.isHoliday).toBe(true);
  });

  it('Methods should be added to manage todos', () => {
    const result = generateDaysData(2024, 2, 1, 10);

    expect(result[0].saveTodos).not.toBeUndefined();
  });

  it('Should return days marked isCurrentMonth if passed', () => {
    const result = generateDaysData(2024, 1, 1, 20, { isCurrentMonth: true });

    expect(result.every((item) => item.data.isCurrentMonth)).toBe(true);
  });

  it('Should throw an error if the end is greater than the start', () => {
    const start = 10;
    const end = 1;

    expect(() => generateDaysData(2024, 1, start, end)).toThrow('Invalid range for days');
  });
});
