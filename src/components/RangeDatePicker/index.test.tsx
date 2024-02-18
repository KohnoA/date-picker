import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import { RangeDatePicker } from './index';

describe('Testing DatePicker component', () => {
  it('Test', () => {
    render(<RangeDatePicker />);

    expect(screen.getByText(/RangeDatePicker/)).toBeInTheDocument();
  });
});
