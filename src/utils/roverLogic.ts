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

export const plateauSize = (line: string): [number, number] => {
  const [maxX, maxY] = line.split(' ').map(Number);
  return [maxX, maxY];
};

export const parsePosition = (line: string): Position => {
  const [x, y, heading] = line.split(' ');
  return {
    x: Number(x),
    y: Number(y),
    heading: heading as Position['heading'],
  };
};

export const foo = (input: string) => {
  if (!validateInput(input)) throw new Error('Invalid input');
  const lines = input.trim().split('\n');
  const [maxX, maxY] = plateauSize(lines[0]);

  const rovers = [];
  for (let i = 1; i < lines.length; i += 2) {
    const position = parsePosition(lines[i]);
    const instructions = lines[i + 1];
    let newPosition = position;
    for (const instruction of instructions) {
      newPosition = moveRover(newPosition, instruction);
    }
    rovers.push(newPosition);
  }
return rovers;
};

export {};
