import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import { DatePicker } from './index';

describe('Testing DatePicker component', () => {
  it('Test', () => {
    render(<DatePicker />);

    expect(screen.getByText(/Hello world/)).toBeInTheDocument();
  });
});
