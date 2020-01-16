import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UnderConstructionSVG from '../UnderConstructionSVG';

afterEach(cleanup);

it('renders without crashing', () => {
  const { getByTestId } = render(<UnderConstructionSVG />);
  expect(getByTestId('svg-element')).toBeInTheDocument();
});
