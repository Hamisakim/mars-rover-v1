/* eslint-disable jest/valid-title */
import {
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
    it('should move the rover forward when facing north', () => {});

    it('should move the rover forward when facing east', () => {});

    it('should move the rover forward when facing south', () => {});

    it('should move the rover forward when facing west', () => {});
  });
});

export {};
