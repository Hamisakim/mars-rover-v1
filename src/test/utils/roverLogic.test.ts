/* eslint-disable jest/valid-title */
import {
  moveRover,
  Position,
  turnLeft,
  turnRight,
  validateInputString,
} from '../../utils/roverLogic';

describe('Rover Logic', () => {
  describe(validateInputString.name, () => {
    it('should validate a string of instructions correctly', () => {
      expect(validateInputString('LRM')).toBe(true);
      expect(validateInputString('LMLMLMLMM')).toBe(true);
      expect(validateInputString('MMRMMRMRRM')).toBe(true);

      expect(validateInputString('L R M')).toBe(false);
      expect(validateInputString('LMW')).toBe(false);
      expect(validateInputString('1LM')).toBe(false);
    });
  });

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

export {};
