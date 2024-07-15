/* eslint-disable jest/valid-title */
import {
  moveRover,
  Position,
  turnLeft,
  turnRight,
  validateInput,
} from '../../utils/roverLogic';

describe('Rover Logic', () => {
  describe('rotateRover', () => {
    it('should rotate the rover 90 degrees to the right', () => {
      expect(turnRight('N')).toBe('E');
      expect(turnRight('E')).toBe('S');
      expect(turnRight('S')).toBe('W');
      expect(turnRight('W')).toBe('N');
    });

    it('should rotate the rover 90 degrees to the left', () => {
      expect(turnLeft('N')).toBe('W');
      expect(turnLeft('W')).toBe('S');
      expect(turnLeft('S')).toBe('E');
      expect(turnLeft('E')).toBe('N');
    });
  });

  describe('moveRover', () => {
    it('should move the rover forward when facing north', () => {
      const position: Position = { x: 0, y: 0, heading: 'N' };
      const newPosition = moveRover(position, 'M');
      expect(newPosition).toEqual({ x: 0, y: 1, heading: 'N' });
    });

    it('should move the rover forward when facing east', () => {
      const position: Position = { x: 0, y: 0, heading: 'E' };
      const newPosition = moveRover(position, 'M');
      expect(newPosition).toEqual({ x: 1, y: 0, heading: 'E' });
    });

    it('should move the rover forward when facing south', () => {
      const position: Position = { x: 0, y: 0, heading: 'S' };
      const newPosition = moveRover(position, 'M');
      expect(newPosition).toEqual({ x: 0, y: -1, heading: 'S' });
    });

    it('should move the rover forward when facing west', () => {
      const position: Position = { x: 0, y: 0, heading: 'W' };
      const newPosition = moveRover(position, 'M');
      expect(newPosition).toEqual({ x: -1, y: 0, heading: 'W' });
    });
  });
});

describe('validateInput', () => {
  //TODO fix this formatting
  it('should return true for valid input', () => {
    const input = `5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM`;
    expect(validateInput(input)).toBe(true);
  });

  it('should return false for input with invalid plateau size', () => {
    const input = `5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM`;
    expect(validateInput(input)).toBe(false);
  });

  it('should return false for input with invalid rover position', () => {
    const input = `5 5
1 2
LMLMLMLMM
3 3 E
MMRMMRMRRM`;
    expect(validateInput(input)).toBe(false);
  });

  it('should return false for input with invalid instructions', () => {
    const input = `5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRMX`;
    expect(validateInput(input)).toBe(false);
  });

  it('should return false for input with incorrect number of lines', () => {
    const input = `5 5
1 2 N
LMLMLMLMM
3 3 E`;
    expect(validateInput(input)).toBe(false);
  });

  it('should return false for input with incorrect characters', () => {
    const input = `5 5
1 2 N
LX
3 3 E
MMRMMRMRRM`;
    expect(validateInput(input)).toBe(false);
  });
});

export {};
