export const validateInputString = (input: string): boolean => {
    const validInput = /^[LRM]+$/;
    return validInput.test(input);
}

export {}