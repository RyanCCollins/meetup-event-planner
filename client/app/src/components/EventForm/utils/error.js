const calculatedError = (input) =>
  input.touched && input.error ? input.error : null;

export const valueRequired = (input) =>
  input.value === '' ? 'Value Required' : input.error;

export const atLeastOne = (guestsList, input) =>
  input.touched && guestsList.length < 1 ? 'At least one guest required' : null;

export const dateError = (input, hasBeenFocused) =>
  hasBeenFocused && !input.valud && input.error ? input.error : null;

export default calculatedError;
