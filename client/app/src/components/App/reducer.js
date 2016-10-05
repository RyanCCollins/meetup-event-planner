import update from 'react-addons-update';
import * as types from './constants';

export const initialState = {
  user: {
    authToken: null,
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTHENTICATE_USER:
      return update(state, {
        user: {
          $set: action.user,
        },
      });
    case types.INVALIDATE_USER:
      return update(state, {
        user: {
          $set: {
            authToken: null,
          },
        },
      });
    default:
      return state;
  }
};

export default authReducer;
