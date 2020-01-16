import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ErrorSVG from '../ErrorSVG';

afterEach(cleanup);

it('renders without crashing', () => {
  const { getByTestId } = render(<ErrorSVG />);
  expect(getByTestId('svg-element')).toBeInTheDocument();
});
