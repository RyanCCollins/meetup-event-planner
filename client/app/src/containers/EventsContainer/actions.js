import * as types from './constants';

// eventsIncrementCurrent :: None -> {Action}
export const eventsIncrementCurrent = () => ({
  type: types.INCREMENT_CURRENT,
});
