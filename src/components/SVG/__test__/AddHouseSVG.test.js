import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddHouseSVG from '../AddHouseSVG';

// Cleanup
afterEach(cleanup);

// Testing
it('renders without crashing', () => {
  const { getByTestId } = render(<AddHouseSVG />);
  expect(getByTestId('svg-element')).toBeInTheDocument();
});
