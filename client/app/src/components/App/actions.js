import * as types from './constants';

export const setAuthToken = (token) => ({
  type: types.SET_AUTH_TOKEN,
  token,
});
