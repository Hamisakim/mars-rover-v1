/* eslint-disable jest/valid-title */
import { validateInputString } from '../../utils/roverLogic';

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

  describe('moveRover', () => {
    it('should move the rover forward when facing north', () => {});

    it('should move the rover forward when facing east', () => {});

    it('should move the rover forward when facing south', () => {});

    it('should move the rover forward when facing west', () => {});
  });

  describe('rotateRover', () => {
    it('should rotate the rover 90 degrees to the right', () => {});

    it('should rotate the rover 90 degrees to the left', () => {});
  });
});

export {};
