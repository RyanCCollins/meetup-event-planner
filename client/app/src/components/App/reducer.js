import update from 'react-addons-update';
import * as types from './constants';

export const initialState = {
  authToken: null,
  user: null,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_AUTH_TOKEN:
      return update(state, {
        authToken: {
          $set: action.token,
        },
      });
    default:
      return state;
  }
};

export default appReducer;
