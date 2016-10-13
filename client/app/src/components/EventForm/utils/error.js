const calculatedError = (input) =>
  input.dirty || input.touched && input.error ? input.error : null;

export const valueRequired = (input) =>
  input.value === '' ? 'Value Required' : input.error;

export default calculatedError;
