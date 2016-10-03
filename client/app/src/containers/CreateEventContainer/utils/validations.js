import * as validation from '../../../utils/validation';
import memoize from 'lru-memoize';

const nameInput = [
  validation.minLength(3),
  validation.maxLength(50),
  validation.valueRequired,
];

const startDateInput = [
  validation.isValidDate,
  validation.valueRequired,
];

const endDateInput = [
  validation.isValidDate,
  validation.valueRequired,
];

const typeInput = [
  validation.valueRequired,
  validation.oneOf(['conference', 'office', 'birthday', 'wedding', 'other']),
];

const hostInput = [
  validation.minLength(3),
  validation.maxLength(50),
  validation.valueRequired,
];

const guestsInput = [
  validation.minLength(1),
  validation.maxLength(10),
];

// Create the validator
const createEventValidation = validation.createValidator({
  nameInput,
  startDateInput,
  endDateInput,
  typeInput,
  hostInput,
  guestsInput,
});

/* Memoize and export */
const validator = memoize(10)(createEventValidation);
export default validator;
