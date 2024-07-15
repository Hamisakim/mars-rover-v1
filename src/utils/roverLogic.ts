export const validateInputString = (input: string): boolean => {
  const validInput = /^[LRM]+$/;
  return validInput.test(input);
};

export interface Position {
  x: number;
  y: number;
  heading: 'N' | 'E' | 'S' | 'W';
}

export const turnLeft = (heading: Position['heading']): Position['heading'] => {
  switch (heading) {
    case 'N':
      return 'W';
    case 'E':
      return 'N';
    case 'S':
      return 'E';
    case 'W':
      return 'S';
  }
};

export const turnRight = (
  heading: Position['heading']
): Position['heading'] => {
  switch (heading) {
    case 'N':
      return 'E';
    case 'E':
      return 'S';
    case 'S':
      return 'W';
    case 'W':
      return 'N';
  }
};

/**
 * Moves the rover based on the given instruction.
 * @param position - The current position of the rover.
 * @param instruction - The instruction to be executed ('L' for left, 'R' for right, 'M' for move).
 * @returns The new position of the rover after executing the instruction.
 */
export const moveRover = (
  position: Position,
  instruction: string
): Position => {
  //TODO: Consider the case where the rover goes out of bounds
  let { x, y, heading } = position;

  switch (instruction) {
    case 'L':
      heading = turnLeft(heading);
      break;
    case 'R':
      heading = turnRight(heading);
      break;
    case 'M':
      switch (heading) {
        case 'N':
          y += 1;
          break;
        case 'E':
          x += 1;
          break;
        case 'S':
          y -= 1;
          break;
        case 'W':
          x -= 1;
          break;
      }
      break;
  }

  return { x, y, heading };
};

export {};
