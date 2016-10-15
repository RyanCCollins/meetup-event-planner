import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  error: null,
  message: null,
  guestList: [],
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
      default:
        return state;
    }
  };

export default createEventReducer;
