import React from 'react';
import { render } from '@testing-library/react';
import App from './App.tsx';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/loading/i);
  expect(linkElement).toBeInTheDocument();
});
