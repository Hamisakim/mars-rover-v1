import React from 'react';
import { render, screen } from '@testing-library/react';
import MarsRover from '../../components/MarsRover';

test('renders learn react link', () => {
  render(<MarsRover />);
  const linkElement = screen.getByText(/MarsRover/);
  expect(linkElement).toBeInTheDocument();
});
