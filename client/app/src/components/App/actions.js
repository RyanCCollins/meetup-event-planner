import * as types from './constants';

export const setAuthTokenSuccess = (token) => ({
  type: types.SET_AUTH_TOKEN_SUCCESS,
  token,
});

export const setAuthTokenFailure = (error) => ({
  type: types.SET_AUTH_TOKEN_FAILURE,
  error,
})

// setUser :: Object -> {Action}
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

export const setPersistantAuthToken = (authToken) => (dispatch) => {
  async function persistToken() {
    try {
      const token = await localStorage.set('auth_token', authToken);
      dispatch(
        setAuthTokenSuccess(token)
      );
    } catch (err) {
      dispatch(
        setAuthTokenFailure(err)
      );
    }
  }
  persistToken();
};

export const loadPersistedAuthToken = () => (dispatch) => {
  async function loadAuthToken() {
    try {
      const token = await localStorage.get('auth_token');
      dispatch(
        setAuthTokenSuccess(token)
      );
    } catch (err) {
      dispatch(
        setAuthTokenFailure(err)
      );
    }
  }
  loadAuthToken();
};
