import * as types from './constants';

export const setAuthTokenSuccess = (token) => ({
  type: types.SET_AUTH_TOKEN_SUCCESS,
  token,
});

export const setAuthTokenFailure = (error) => ({
  type: types.SET_AUTH_TOKEN_FAILURE,
  error,
});

// setUser :: Object -> {Action}
export const setUser = (user) => ({
  type: types.SET_USER,
  user,
});

export const createUser = (user) => (dispatch) => {
  dispatch(
    setUser(user)
  );
  localStorage.setItem('auth_token', user.token);
  dispatch(
    setAuthTokenSuccess(user.token)
  );
};

export const loadPersistedAuthToken = () => (dispatch) => {
  const token = localStorage.getItem('auth_token');
  if (token) {
    dispatch(
      setAuthTokenSuccess(token)
    );
  } else {
    dispatch(
      setAuthTokenFailure('No auth token found')
    );
  }
};
