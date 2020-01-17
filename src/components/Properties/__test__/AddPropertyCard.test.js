import React from 'react';
import { render, cleanup } from '@testing-library/react';
import AddPropertyCard from '../AddPropertyCard';

afterEach(cleanup);

it('renders different title if error card', () => {
  const { queryByText } = render(<AddPropertyCard error />);

  expect(queryByText('Uh oh! There was an error.')).toBeTruthy();
});

it('renders different title if no properties', () => {
  const { queryByText } = render(<AddPropertyCard propertyNum={0} />);

  expect(queryByText('No properties, add one?')).toBeTruthy();
});

it('renders different title if properties > 0', () => {
  const { queryByText } = render(<AddPropertyCard propertyNum={1} />);

  expect(queryByText('Add a New Property?')).toBeTruthy();
});
