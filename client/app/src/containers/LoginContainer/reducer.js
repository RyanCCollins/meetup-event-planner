import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  error: null,
  message: null,
  isLoading: false,
  isShowingTips: false,
};

const loginReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.LOGIN_SHOW_ERROR:
        return update(state, {
          error: {
            $set: action.error,
          },
          isLoading: {
            $set: false,
          },
        });
      case types.LOGIN_SHOW_MESSAGE:
        return update(state, {
          message: {
            $set: action.message,
          },
          isLoading: {
            $set: false,
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
      case types.LOGIN_SET_LOADING:
        return update(state, {
          isLoading: {
            $set: true,
          },
        });
      case types.TOGGLE_LOGIN_TIPS:
        return update(state, {
          isShowingTips: {
            $set: action.isShowing,
          },
        });
      default:
        return state;
    }
  };

export default loginReducer;
