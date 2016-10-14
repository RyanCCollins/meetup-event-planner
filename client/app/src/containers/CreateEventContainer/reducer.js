import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  error: null,
  message: null,
  guestList: [],
  geoLocation: null,
  startDateFocused: false,
  endDateFocused: false,
};

const createEventReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.CREATE_EVENT_ERROR:
        return update(state, {
          error: {
            $set: action.error,
          },
        });
      case types.CREATE_EVENT_MESSAGE:
        return update(state, {
          message: {
            $set: action.message,
          },
        });
      case types.CLEAR_CREATE_EVENT_ERROR:
        return update(state, {
          error: {
            $set: null,
          },
        });
      case types.CLEAR_CREATE_EVENT_MESSAGE:
        return update(state, {
          message: {
            $set: null,
          },
        });
      case types.CREATE_EVENT_ADD_GUESTS:
        return update(state, {
          guestList: {
            $set: action.guests,
          },
        });
      case types.CREATE_EVENT_SET_END_DATE_FOCUS:
        return update(state, {
          endDateFocused: {
            $set: true,
          },
        });
      case types.CREATE_EVENT_SET_START_DATE_FOCUS:
        return update(state, {
          startDateFocused: {
            $set: true,
          },
        });
      default:
        return state;
    }
  };

export default createEventReducer;
