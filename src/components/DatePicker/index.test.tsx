import { fireEvent, render, screen } from '@testing-library/react';

import { CalendarView, CalendarWeekStart } from '@/constants';
import { theme } from '@/styles';

import '@testing-library/jest-dom';

import { DatePicker } from './index';

const activeCalendarCellStyles = `
  color: ${theme.colors.white};
  background-color: ${theme.colors.blue};
`;
const activeRangeStartStyles = `
  opacity: ${theme.opacity.low};
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;
const activeRangeMiddleStyles = `
  color: ${theme.colors.blue};
  background-color: ${theme.colors.blueTransparent};
  border-radius: 0;
`;
const activeRangeEndStyles = `
  color: ${theme.colors.white};
  background-color: ${theme.colors.blue};
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

describe('Testing the DatePicker Component Configuration', () => {
  it('if the range prop is undefined or false, the SimpleDatePicker should be rendered', () => {
    render(<DatePicker range={false} />);

    expect(screen.getByTestId('simple-date-picker')).toBeInTheDocument();
  });

  it('if the range prop is true, the RangeDatePicker should be rendered', () => {
    render(<DatePicker range />);

    expect(screen.getByTestId('range-date-picker')).toBeInTheDocument();
  });

  it('DateInput and calendar must contain the initial value if it is passed', () => {
    const activeDay = new Date(2024, 0, 1);

    render(<DatePicker showWeekends initialDate={activeDay} />);

    expect(screen.getByTestId('date-input-field')).toHaveValue('01/01/2024');
    fireEvent.click(screen.getByTestId('toggle-calendar-button'));

    expect(screen.getByTestId(`calendar-cell-${activeDay.getTime()}`)).toHaveStyle(
      activeCalendarCellStyles,
    );
  });

  it('DateInput must contain the initial range value if it is passed', () => {
    const activeStartDay = new Date(2024, 0, 1);
    const activeMiddleDay = new Date(2024, 0, 2);
    const activeEndDay = new Date(2024, 0, 3);

    render(<DatePicker range initialStartDate={activeStartDay} initialEndDate={activeEndDay} />);

    expect(screen.getByTestId('date-input-field')).toHaveValue('01/01/2024 - 01/03/2024');
    fireEvent.click(screen.getByTestId('toggle-calendar-button'));

    expect(screen.getByTestId(`calendar-cell-${activeStartDay.getTime()}`)).toHaveStyle(
      activeRangeStartStyles,
    );
    expect(screen.getByTestId(`calendar-cell-${activeMiddleDay.getTime()}`)).toHaveStyle(
      activeRangeMiddleStyles,
    );
    expect(screen.getByTestId(`calendar-cell-${activeEndDay.getTime()}`)).toHaveStyle(
      activeRangeEndStyles,
    );
  });

  it('DateInput must contain the label if it is passed', () => {
    render(<DatePicker label="Custom label" />);

    expect(screen.getByTestId('date-input-label')).toHaveTextContent('Custom label');
  });

  it('custom styling must be applied', () => {
    render(<DatePicker customTheme={{ datePickerMaxWidth: '350px' }} />);

    expect(screen.getByTestId('simple-date-picker')).toHaveStyle('max-width: 350px;');
  });

  it('The week view should be displayed correctly', () => {
    render(<DatePicker view={CalendarView.WEEK} />);

    const numberOfDaysInWeekCalendar = 7;

    expect(screen.getAllByTestId(/calendar-cell-\d+/)).toHaveLength(numberOfDaysInWeekCalendar);
  });

  it('The month view should be displayed correctly', () => {
    render(<DatePicker view={CalendarView.MONTH} />);

    const numberOfDaysInMonthCalendar = 42;

    expect(screen.getAllByTestId(/calendar-cell-\d+/)).toHaveLength(numberOfDaysInMonthCalendar);
  });

  it('The year view should be displayed correctly', () => {
    render(<DatePicker view={CalendarView.YEAR} />);

    expect(screen.getAllByTestId('rewind-year-button')).toHaveLength(2);
  });

  it('The week must start on Sunday', () => {
    render(<DatePicker showWeekends weekStart={CalendarWeekStart.SUNDAY} />);

    expect(screen.getAllByTestId('calendar-day-name')[0]).toHaveTextContent('Su');
  });

  it('The week must start on Monday', () => {
    render(<DatePicker showWeekends weekStart={CalendarWeekStart.MONDAY} />);

    expect(screen.getAllByTestId('calendar-day-name')[0]).toHaveTextContent('Mo');
  });
});
