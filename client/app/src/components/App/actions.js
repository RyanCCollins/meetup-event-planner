import * as types from './constants';

export const setAuthToken = (token) => ({
  type: types.SET_AUTH_TOKEN,
  token,
});

export const setUser = (user) => ({
  type: types.SET_USER,
  user,
});

export const createUser = (user) => (dispatch) => {
  dispatch(
    setUser(user)
  );
  localStorage.set('auth_token', user.token);
  dispatch(
    setAuthToken(user.token)
  );
};
