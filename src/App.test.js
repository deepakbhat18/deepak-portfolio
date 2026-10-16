import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Deepak Bhat portfolio home heading and footer', () => {
  render(<App />);
  const elements = screen.getAllByText(/DEEPAK BHAT/i);
  expect(elements.length).toBeGreaterThanOrEqual(1);
  expect(elements[0]).toBeInTheDocument();
});
