const calculatedError = (input) =>
  input.touched && input.error ? input.error : null;

export const atLeastOne = (guestsList, input) =>
  input.touched && guestsList.length < 1 ? 'At least one guest required' : null;

export const dateError = (input) =>
  !input.valid && input.error ? input.error : null;

export default calculatedError;
