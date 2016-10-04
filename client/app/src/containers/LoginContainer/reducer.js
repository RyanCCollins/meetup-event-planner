import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  error: null,
  message: null,
};

const loginReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.LOGIN_SHOW_ERROR:
        return update(state, {
          error: {
            $set: action.error,
          },
        });
      case types.LOGIN_SHOW_MESSAGE:
        return update(state, {
          message: {
            $set: action.message,
          },
        });
      case types.LOGIN_CLEAR_ERROR:
        return update(state, {
          error: {
            $set: null,
          },
        });
      case types.LOGIN_CLEAR_MESSAGE:
        return update(state, {
          message: {
            $set: null,
          },
        });
      default:
        return state;
    }
  };

export default loginReducer;
