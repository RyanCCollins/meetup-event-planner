import * as types from './constants';

// signupShowError :: String -> {Action}
export const signupShowError = (error) => ({
  type: types.SIGNUP_SHOW_ERROR,
  error,
});

// signupShowMessage :: String -> {Action}
export const signupShowMessage = (message) => ({
  type: types.SIGNUP_SHOW_MESSAGE,
  message,
});

// clearSignupError :: None -> {Action}
export const signupClearError = () => ({
  type: types.SIGNUP_CLEAR_ERROR,
});

// signupClearMessage :: None -> {Action}
export const signupClearMessage = () => ({
  type: types.SIGNUP_CLEAR_MESSAGE,
});

export const clearSignupToast = (type) =>
  (dispatch) => {
    switch (type) {
      case 'error':
        dispatch(
          signupClearError()
        );
        break;
      case 'message':
        dispatch(
          signupClearMessage()
        );
        break;
      default:
        break;
    }
  };

export const fieldsToData = (fields) => ({
  name: fields.nameInput.value,
  email: fields.emailInput.value,
  password: fields.passwordInput.value,
  passwordConfirmation: fields.passwordConfirmationInput.value,
  bio: fields.bioInput.value || '',
  employer: fields.employerInput.value || '',
});

export const signupSetLoading = () => ({
  type: types.SIGNUP_SET_LOADING,
});

export const toggleSignupTips = (isShowing) => ({
  type: types.TOGGLE_SIGNUP_TIPS,
  isShowing,
});
