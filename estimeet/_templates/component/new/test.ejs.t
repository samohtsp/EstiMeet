---
to: src/components/<%= name %>.component/<%= name %>.test.js
---
import React from 'react';
import { render } from '@testing-library/react';
import {<%= name %>} from './<%= name %>';

test('renders <%= name %> component', () => {
  const { getByText } = render(<<%= name %> />);
  const element = getByText(/<%= name %> Component/i);
  expect(element).toBeInTheDocument();
});

