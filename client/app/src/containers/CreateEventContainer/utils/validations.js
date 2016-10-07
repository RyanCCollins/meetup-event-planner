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
  validation.valueRequired,
  validation.minLength(3),
  validation.maxLength(50),
];

const locationInput = [
  validation.minLength(10),
  validation.maxLength(100),
  validation.valueRequired,
];

const guestsInput = [
  validation.minLength(3),
  validation.containsTwoWords,
  validation.valueRequired,
];

// Create the validator
const createEventValidation = validation.createValidator({
  nameInput,
  startDateInput,
  endDateInput,
  typeInput,
  hostInput,
  guestsInput,
  locationInput,
});

/* Memoize and export */
const validator = memoize(10)(createEventValidation);
export default validator;
