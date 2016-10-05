import update from 'react-addons-update';
import * as types from './constants';

export const initialState = {
  authToken: null,
  user: null,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_AUTH_TOKEN_SUCCESS:
      return update(state, {
        authToken: {
          $set: action.token,
        },
      });
    case types.SET_AUTH_TOKEN_FAILURE:
      return update(state, {
        authToken: {
          $set: null,
        },
      });
    case types.SET_USER:
      return update(state, {
        user: {
          $set: action.user,
        },
      });
    default:
      return state;
  }
};

export default appReducer;
