import { fireEvent, render, screen } from '@testing-library/react';

import { CalendarView, CalendarWeekStart, DateErrors, MONTH_NAMES } from '@/constants';
import { theme } from '@/styles';

import '@testing-library/jest-dom';

import { DatePicker } from './index';

const activeCalendarCellStyles = `
  color: ${theme.calendar.background};
  background-color: ${theme.calendar.cell!.active};
`;
const activeRangeStartStyles = `
  opacity: ${theme.general.opacity!.low};
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;
const activeRangeMiddleStyles = `
  color: ${theme.calendar.cell!.active};
  background-color: ${theme.calendar.cell!.range};
  border-radius: 0;
`;
const activeRangeEndStyles = `
  color: ${theme.calendar.background};
  background-color: ${theme.calendar.cell!.active};
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

    expect(screen.getByTestId('date-input-field')).toHaveValue('01/01/2024 - 03/01/2024');
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

  it('Custom styling must be applied', () => {
    render(<DatePicker customTheme={{ general: { maxWidth: 350 } }} />);

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

describe('General tests for DatePicker component', () => {
  it('Clear button should be hidden when date input is empty', () => {
    render(<DatePicker />);

    const dateInput = screen.getByTestId('date-input-field');

    expect(dateInput).toHaveValue('');
    expect(screen.queryByTestId('clear-date-input-button')).not.toBeInTheDocument();
  });

  it('Clear button should be displayed, when date input is not empty', () => {
    render(<DatePicker />);

    const dateInput = screen.getByTestId('date-input-field');
    const enteredValue = '12/12/2024';

    fireEvent.change(dateInput, { target: { value: enteredValue } });
    expect(dateInput).toHaveValue(enteredValue);
    expect(screen.getByTestId('clear-date-input-button')).toBeInTheDocument();
  });

  it('The input should be cleared when the clear button is pressed', () => {
    render(<DatePicker />);

    const dateInput = screen.getByTestId('date-input-field');
    const enteredValue = '12/12/2024';

    fireEvent.change(dateInput, { target: { value: enteredValue } });
    expect(dateInput).toHaveValue(enteredValue);

    const clearDateInputButton = screen.getByTestId('clear-date-input-button');
    fireEvent.click(clearDateInputButton);
    expect(dateInput).toHaveValue('');
  });

  it('An error message should be displayed if the value is greater than the maximum date', () => {
    render(<DatePicker max={new Date(2024, 1, 2)} />);

    const dateMoreThanMax = '01/02/2025';

    const dateInput = screen.getByTestId('date-input-field');
    fireEvent.change(dateInput, { target: { value: dateMoreThanMax } });

    const errorMessage = screen.getByTestId('date-input-error');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent(DateErrors.VALUE_MORE_MAX);
  });

  it('An error message should be displayed if the value is less than the minimum date', () => {
    render(<DatePicker min={new Date(2024, 1, 2)} />);

    const dateMoreThanMax = '01/02/2023';

    const dateInput = screen.getByTestId('date-input-field');
    fireEvent.change(dateInput, { target: { value: dateMoreThanMax } });

    const errorMessage = screen.getByTestId('date-input-error');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent(DateErrors.VALUE_LESS_MIN);
  });

  it('The calendar should open and close when clicked toggle calendar button', () => {
    render(<DatePicker />);

    const toggleCalendarButton = screen.getByTestId('toggle-calendar-button');
    const calendar = screen.getByTestId('calendar');

    expect(toggleCalendarButton).toBeInTheDocument();
    expect(calendar).toHaveStyle('visibility: hidden;');

    fireEvent.click(toggleCalendarButton);
    expect(calendar).toHaveStyle('visibility: visible;');

    fireEvent.click(toggleCalendarButton);
    expect(calendar).toHaveStyle('visibility: hidden;');
  });

  it('If the value is not selected, the clear calendar button should be hidden', () => {
    render(<DatePicker />);

    expect(screen.queryByTestId('calendar-clear-button')).not.toBeInTheDocument();
  });

  it('If selected, the clear calendar button should be visible', () => {
    render(<DatePicker initialDate={new Date(2024, 0, 1)} />);

    fireEvent.click(screen.getByTestId('toggle-calendar-button'));
    expect(screen.getByTestId('calendar-clear-button')).toBeInTheDocument();
  });

  it('Should move correctly by weeks', () => {
    const activeDay = new Date(2024, 0, 1);

    render(<DatePicker initialDate={activeDay} view={CalendarView.WEEK} />);

    expect(screen.getByTestId('week-month-year')).toHaveTextContent(
      `1 week of ${MONTH_NAMES[0]} 2024`,
    );

    const [prevWeek, nextWeek] = screen.getAllByTestId('rewind-week-month-button');

    fireEvent.click(prevWeek);
    expect(screen.getByTestId('week-month-year')).toHaveTextContent(
      `6 week of ${MONTH_NAMES[MONTH_NAMES.length - 1]} 2023`,
    );

    fireEvent.click(nextWeek);
    expect(screen.getByTestId('week-month-year')).toHaveTextContent(
      `1 week of ${MONTH_NAMES[0]} 2024`,
    );
  });

  it('Should move correctly by months', () => {
    const activeDay = new Date(2024, 0, 1);

    render(<DatePicker initialDate={activeDay} view={CalendarView.MONTH} />);

    expect(screen.getByTestId('week-month-year')).toHaveTextContent(`${MONTH_NAMES[0]} 2024`);

    const [prevMonth, nextMonth] = screen.getAllByTestId('rewind-week-month-button');

    fireEvent.click(prevMonth);
    expect(screen.getByTestId('week-month-year')).toHaveTextContent(
      `${MONTH_NAMES[MONTH_NAMES.length - 1]} 2023`,
    );

    fireEvent.click(nextMonth);
    expect(screen.getByTestId('week-month-year')).toHaveTextContent(`${MONTH_NAMES[0]} 2024`);
  });

  it('Should move correctly by years', () => {
    const activeDay = new Date(2024, 0, 1);

    render(<DatePicker initialDate={activeDay} view={CalendarView.YEAR} />);

    expect(screen.getByTestId('week-month-year')).toHaveTextContent(`${MONTH_NAMES[0]} 2024`);

    const [prevYear, nextYear] = screen.getAllByTestId('rewind-year-button');

    fireEvent.click(prevYear);
    expect(screen.getByTestId('week-month-year')).toHaveTextContent(`${MONTH_NAMES[0]} 2023`);

    fireEvent.click(nextYear);
    expect(screen.getByTestId('week-month-year')).toHaveTextContent(`${MONTH_NAMES[0]} 2024`);
  });
});

describe('Testing TodoList component', () => {
  beforeEach(() => render(<DatePicker />));

  beforeEach(() => {
    fireEvent.click(screen.getByTestId('toggle-calendar-button'));
    fireEvent.dblClick(screen.getAllByTestId(/calendar-cell-\d+/)[0]);
  });

  it('When you double-click on a day, the todo list should open', () => {
    expect(screen.getByTestId('todo-list')).toBeInTheDocument();
  });

  it('Todo list should close when clicking on background or cross', () => {
    expect(screen.getByTestId('todo-list')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('todo-list-backdrop'));
    expect(screen.queryByTestId('todo-list')).not.toBeInTheDocument();

    fireEvent.dblClick(screen.getAllByTestId(/calendar-cell-\d+/)[0]);
    fireEvent.click(screen.getByTestId('todo-list-close-button'));
    expect(screen.queryByTestId('todo-list')).not.toBeInTheDocument();
  });

  it('Todo item should be added', () => {
    fireEvent.change(screen.getByTestId('todo-input'), { target: { value: 'Learn React' } });
    fireEvent.click(screen.getByTestId('todo-list-add-button'));

    const addedItem = screen.getByTestId('todo-item');
    expect(addedItem).toHaveTextContent('Learn React');
    expect(addedItem).toBeInTheDocument();
  });

  it('Todo item should be toggled', () => {
    fireEvent.change(screen.getByTestId('todo-input'), { target: { value: 'Learn React' } });
    fireEvent.click(screen.getByTestId('todo-list-add-button'));

    const todoChechbox = screen.getByTestId('todo-item-checkbox');

    fireEvent.click(todoChechbox);
    expect(screen.getByText(/Learn React/)).toHaveStyle('text-decoration: line-through;');
  });

  it('Todo item should be removed', () => {
    fireEvent.change(screen.getByTestId('todo-input'), { target: { value: 'Learn React' } });
    fireEvent.click(screen.getByTestId('todo-list-add-button'));

    const removeTodoButton = screen.getByTestId('remove-todo-button');

    expect(removeTodoButton).toBeInTheDocument();
    fireEvent.click(removeTodoButton);
    expect(screen.queryByText(/Learn React/)).not.toBeInTheDocument();
  });
});

describe('Testing SimpleDatePicker component', () => {
  it('An error message should be displayed if the value is invalid date', () => {
    render(<DatePicker />);

    const invalidDate = '45/45/3481';
    const errorMessage = `${DateErrors.INVALID.trim()} DD/MM/YYYY`;

    const dateInput = screen.getByTestId('date-input-field');
    fireEvent.change(dateInput, { target: { value: invalidDate } });

    const errorNode = screen.getByTestId('date-input-error');
    expect(errorNode).toBeInTheDocument();
    expect(errorNode).toHaveTextContent(errorMessage);
  });

  it('The selected day should clear when you click on the clear button', () => {
    const activeDay = new Date(2024, 0, 1);

    render(<DatePicker initialDate={activeDay} />);

    const activeCalendarCell = screen.getByTestId(`calendar-cell-${activeDay.getTime()}`);

    expect(activeCalendarCell).toHaveStyle(activeCalendarCellStyles);
    fireEvent.click(screen.getByTestId('calendar-clear-button'));
    expect(activeCalendarCell).not.toHaveStyle(activeCalendarCellStyles);
  });

  it('Setting the value in the date input should be displayed on the calendar', () => {
    const activeDay = new Date(2024, 0, 1);

    render(<DatePicker />);

    fireEvent.change(screen.getByTestId('date-input-field'), { target: { value: '01/01/2024' } });

    expect(screen.getByTestId(`calendar-cell-${activeDay.getTime()}`)).toHaveStyle(
      activeCalendarCellStyles,
    );
  });

  it('Setting a calendar date value should appear in date input', () => {
    const actvieDay = new Date(2024, 0, 1);

    render(<DatePicker initialDate={actvieDay} />);

    fireEvent.click(screen.getByTestId('toggle-calendar-button'));
    fireEvent.click(screen.getByTestId('calendar-clear-button'));

    const activeDayCallendarCell = screen.getByTestId(`calendar-cell-${actvieDay.getTime()}`);
    fireEvent.click(activeDayCallendarCell);

    expect(screen.getByTestId('date-input-field')).toHaveValue('01/01/2024');
  });
});

describe('Testing RangeDatePicker component', () => {
  it('An error message should be displayed if the value is invalid range date', () => {
    render(<DatePicker range />);

    const invalidDate = '45/45/3481';
    const errorMessage = `${DateErrors.INVALID.trim()} DD/MM/YYYY - DD/MM/YYYY`;

    const dateInput = screen.getByTestId('date-input-field');
    fireEvent.change(dateInput, { target: { value: invalidDate } });

    const errorNode = screen.getByTestId('date-input-error');
    expect(errorNode).toBeInTheDocument();
    expect(errorNode).toHaveTextContent(errorMessage);
  });

  it('An error message should be displayed if the start date value is greater than the end date', () => {
    render(<DatePicker range />);

    const dateMoreThanMax = '02/02/2023 - 02/01/2023';

    const dateInput = screen.getByTestId('date-input-field');
    fireEvent.change(dateInput, { target: { value: dateMoreThanMax } });

    const errorMessage = screen.getByTestId('date-input-error');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent(DateErrors.INCORRECT_RANGE);
  });

  it('The selected range should clear when you click on the clear button', () => {
    const activeStartDay = new Date(2024, 0, 1);
    const activeMiddleDay = new Date(2024, 0, 2);
    const activeEndDay = new Date(2024, 0, 3);

    render(
      <DatePicker
        range
        showWeekends
        initialStartDate={activeStartDay}
        initialEndDate={activeEndDay}
      />,
    );

    const activeStartCalendarCell = screen.getByTestId(`calendar-cell-${activeStartDay.getTime()}`);
    const activeMiddleCalendarCell = screen.getByTestId(
      `calendar-cell-${activeMiddleDay.getTime()}`,
    );
    const activeEndCalendarCell = screen.getByTestId(`calendar-cell-${activeEndDay.getTime()}`);

    expect(activeStartCalendarCell).toHaveStyle(activeRangeStartStyles);
    expect(activeMiddleCalendarCell).toHaveStyle(activeRangeMiddleStyles);
    expect(activeEndCalendarCell).toHaveStyle(activeRangeEndStyles);

    fireEvent.click(screen.getByTestId('calendar-clear-button'));

    expect(activeStartCalendarCell).not.toHaveStyle(activeRangeStartStyles);
    expect(activeMiddleCalendarCell).not.toHaveStyle(activeRangeMiddleStyles);
    expect(activeEndCalendarCell).not.toHaveStyle(activeRangeEndStyles);
  });

  it('Setting the date range in the date input should be displayed on the calendar', () => {
    const activeStartDay = new Date(2024, 0, 1);
    const activeMiddleDay = new Date(2024, 0, 2);
    const activeEndDay = new Date(2024, 0, 3);

    render(<DatePicker range showWeekends />);

    fireEvent.click(screen.getByTestId('toggle-calendar-button'));
    fireEvent.change(screen.getByTestId('date-input-field'), {
      target: { value: '01/01/2024 - 03/01/2024' },
    });

    const activeStartCalendarCell = screen.getByTestId(`calendar-cell-${activeStartDay.getTime()}`);
    const activeMiddleCalendarCell = screen.getByTestId(
      `calendar-cell-${activeMiddleDay.getTime()}`,
    );
    const activeEndCalendarCell = screen.getByTestId(`calendar-cell-${activeEndDay.getTime()}`);

    expect(activeStartCalendarCell).toHaveStyle(activeRangeStartStyles);
    expect(activeMiddleCalendarCell).toHaveStyle(activeRangeMiddleStyles);
    expect(activeEndCalendarCell).toHaveStyle(activeRangeEndStyles);
  });

  it('Setting a calendar date range should appear in date input', () => {
    const activeStartDay = new Date(2024, 0, 1);
    const activeEndDay = new Date(2024, 0, 3);

    render(
      <DatePicker
        range
        showWeekends
        initialStartDate={activeStartDay}
        initialEndDate={activeEndDay}
      />,
    );

    fireEvent.click(screen.getByTestId('toggle-calendar-button'));
    fireEvent.click(screen.getByTestId('calendar-clear-button'));

    const activeStartCalendarCell = screen.getByTestId(`calendar-cell-${activeStartDay.getTime()}`);
    const activeEndCalendarCell = screen.getByTestId(`calendar-cell-${activeEndDay.getTime()}`);

    fireEvent.click(activeStartCalendarCell);
    fireEvent.click(activeEndCalendarCell);

    expect(screen.getByTestId('date-input-field')).toHaveValue('01/01/2024 - 03/01/2024');
  });
});
