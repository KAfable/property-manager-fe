import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LocationSVG from '../LocationSVG';

afterEach(cleanup);

it('renders without crashing', () => {
  const { getByTestId } = render(<LocationSVG />);
  expect(getByTestId('svg-element')).toBeInTheDocument();
});
