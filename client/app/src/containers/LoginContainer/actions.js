import * as types from './constants';

// loginShowError :: String -> {Action}
export const loginShowError = (error) => ({
  type: types.LOGIN_SHOW_ERROR,
  error,
});

// loginShowMessage :: String -> {Action}
export const loginShowMessage = (message) => ({
  type: types.LOGIN_SHOW_MESSAGE,
  message,
});

// loginClearError :: None -> {Action}
export const loginClearError = () => ({
  type: types.LOGIN_CLEAR_ERROR,
});

// loginClearMessage :: None -> {Action}
export const loginClearMessage = () => ({
  type: types.LOGIN_CLEAR_MESSAGE,
});

export const clearLoginToast = (type) =>
  (dispatch) => {
    switch (type) {
      case 'error':
        dispatch(
          loginClearError()
        );
        break;
      case 'message':
        dispatch(
          loginClearMessage()
        );
        break;
      default:
        break;
    }
  };

export const loginSetLoading = () => ({
  type: types.LOGIN_SET_LOADING,
});

export const toggleLoginTips = (isShowing) => ({
  type: types.TOGGLE_LOGIN_TIPS,
  isShowing,
});
