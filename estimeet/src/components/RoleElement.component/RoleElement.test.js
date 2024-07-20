import React from 'react';
import { render } from '@testing-library/react';
import {RoleElement} from './RoleElement';

test('renders RoleElement component', () => {
  const { getByText } = render(<RoleElement />);
  const element = getByText(/RoleElement Component/i);
  expect(element).toBeInTheDocument();
});

