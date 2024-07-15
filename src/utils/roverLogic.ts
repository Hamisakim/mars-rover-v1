export interface Position {
  x: number;
  y: number;
  heading: 'N' | 'E' | 'S' | 'W';
}

/**
 * Validates the input string for the Mars Rover program.
 * @param input - The input string to be validated.
 * @returns A boolean indicating whether the input is valid or not.
 */
export const validateInput = (input: string): boolean => {
  const lines = input.trim().split('\n');
  if (lines.length < 3 || lines.length % 2 === 0) return false;

  const plateauSize = lines[0].split(' ');
  if (
    plateauSize.length !== 2 ||
    isNaN(Number(plateauSize[0])) ||
    isNaN(Number(plateauSize[1]))
  )
    return false;

  for (let i = 1; i < lines.length; i += 2) {
    const position = lines[i].split(' ');
    if (
      position.length !== 3 ||
      isNaN(Number(position[0])) ||
      isNaN(Number(position[1])) ||
      !['N', 'E', 'S', 'W'].includes(position[2])
    )
      return false;

    const instructions = lines[i + 1];
    if (!/^[LRM]+$/.test(instructions)) return false;
  }

  return true;
};

/**
 * Turns the rover left based on the current heading.
 * @param heading - The current heading of the rover.
 * @returns The new heading after turning left.
 */
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

/**
 * Turns the rover to the right based on the current heading.
 * @param heading - The current heading of the rover.
 * @returns The new heading after turning right.
 */
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
 * @param maxX - The maximum x coordinate of the plateau.
 * @param maxY - The maximum y coordinate of the plateau.
 * @returns The new position of the rover after executing the instruction.
 */
export const moveRover = (
  position: Position,
  instruction: string,
  maxX: number,
  maxY: number
): Position => {
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
          y = Math.min(y + 1, maxY);
          break;
        case 'E':
          x = Math.min(x + 1, maxX);
          break;
        case 'S':
          y = Math.max(y - 1, 0);
          break;
        case 'W':
          x = Math.max(x - 1, 0);
          break;
      }
      break;
  }

  return { x, y, heading };
};

/**
 * Parses a string to extract the plateau size.
 * @param line - The string representing the plateau size in the format "maxX maxY".
 * @returns An array containing the maximum X and Y coordinates of the plateau.
 */
export const plateauSize = (line: string): [number, number] => {
  const [maxX, maxY] = line.split(' ').map(Number);
  return [maxX, maxY];
};

/**
 * Parses a string representation of a position and returns a Position object.
 * @param line - The string representation of the position in the format "x y heading".
 * @returns The parsed Position object.
 */
export const parsePosition = (line: string): Position => {
  const [x, y, heading] = line.split(' ');
  return {
    x: Number(x),
    y: Number(y),
    heading: heading as Position['heading'],
  };
};

/**
 * Executes the input string to control the Mars rovers.
 * @param input - The input string containing the instructions for the rovers.
 * @returns A string representing the final positions and headings of the rovers.
 * @throws {Error} If the input is invalid.
 */
export const executeInput = (input: string) => {
  if (!validateInput(input)) throw new Error('Invalid input'); //? is this redundant
  const lines = input.trim().split('\n');
  const [maxX, maxY] = plateauSize(lines[0]);

  const rovers = [];
  for (let i = 1; i < lines.length; i += 2) {
    const position = parsePosition(lines[i]);
    const instructions = lines[i + 1];
    let newPosition = position;
    for (const instruction of instructions) {
      newPosition = moveRover(newPosition, instruction, maxX, maxY);
    }
    rovers.push(`${newPosition.x} ${newPosition.y} ${newPosition.heading}`);
  }
  return rovers.join('\n');
};

export {};
