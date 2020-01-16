import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProfileSVG from '../ProfileSVG';

afterEach(cleanup);

it('renders without crashing', () => {
  const { getByTestId } = render(<ProfileSVG />);
  expect(getByTestId('svg-element')).toBeInTheDocument();
});
