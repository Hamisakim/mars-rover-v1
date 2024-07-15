export const validateInputString = (input: string): boolean => {
  const validInput = /^[LRM]+$/;
  return validInput.test(input);
};

interface Position {
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

export const turnRight = (heading: Position['heading']): Position['heading'] => {
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


export {};
