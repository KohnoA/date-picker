import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import { DatePicker } from './index';

describe('Testing DatePicker component', () => {
  it('Test', () => {
    render(<DatePicker />);

    expect(screen.getByTestId('date-picker')).toBeInTheDocument();
  });
});
