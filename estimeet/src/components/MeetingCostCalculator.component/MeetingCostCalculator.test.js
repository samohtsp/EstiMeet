import React from 'react';
import { render } from '@testing-library/react';
import {MeetingCostCalculator} from './MeetingCostCalculator';

test('renders MeetingCostCalculator component', () => {
  const { getByText } = render(<MeetingCostCalculator />);
  const element = getByText(/MeetingCostCalculator Component/i);
  expect(element).toBeInTheDocument();
});

