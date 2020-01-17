import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Overview from '../Overview';

it('renders without crashing', () => {
  const { container } = render(<Overview />);

  expect(container.firstChild).toHaveClass('overview');
});
