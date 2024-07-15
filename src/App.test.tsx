import {  render, screen } from '@testing-library/react';
import App from './App';


test('renders MarsRover component', () => {
  render(<App />);
  const linkElement = screen.getByText(/MarsRover/);
  expect(linkElement).toBeInTheDocument();
});