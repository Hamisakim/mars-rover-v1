import { render, screen, fireEvent } from '@testing-library/react';
import MarsRover from '../../components/MarsRover';
test('renders MarsRover component', () => {
  render(<MarsRover />);
  const headingElement = screen.getByText(/MarsRover/);
  expect(headingElement).toBeInTheDocument();
});

test('displays input and output fields', () => {
  render(<MarsRover />);
  const inputElement = screen.getByRole('textbox', { name: 'Rover Inputs' });
  const outputElement = screen.getByRole('textbox', { name: 'Rover Outputs' });
  expect(inputElement).toBeInTheDocument();
  expect(outputElement).toBeInTheDocument();
});

test('updates input value when typing', () => {
  render(<MarsRover />);
  const inputElement = screen.getByPlaceholderText(
    'Enter input...'
  ) as HTMLInputElement;
  fireEvent.change(inputElement, {
    target: { value: '5 5\n1 2 N\nLMLMLMLMM' },
  });
  expect(inputElement.value).toBe('5 5\n1 2 N\nLMLMLMLMM');
});

test('displays error message for invalid input', () => {
  render(<MarsRover />);
  const inputElement = screen.getByPlaceholderText('Enter input...');
  const submitButton = screen.getByRole('button', { name: /Submit/ });
  fireEvent.change(inputElement, { target: { value: 'invalid input' } });
  fireEvent.click(submitButton);
  const errorMessage = screen.getByText(/Invalid input/);
  expect(errorMessage).toBeInTheDocument();
});

test('displays success message and output for valid input', () => {
  render(<MarsRover />);
  const inputElement = screen.getByPlaceholderText('Enter input...');
  const submitButton = screen.getByRole('button', { name: /Submit/ });
  fireEvent.change(inputElement, {
    target: { value: '5 5\n1 2 N\nLMLMLMLMM' },
  });
  fireEvent.click(submitButton);
  const successMessage = screen.getByText(/Success/);
  const outputElement = screen.getByRole('textbox', {
    name: /Rover Outputs/,
  }) as HTMLInputElement;
  expect(successMessage).toBeInTheDocument();
  expect(outputElement.value).toBe('1 3 N');
});
