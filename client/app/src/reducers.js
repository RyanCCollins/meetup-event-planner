import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import client from './apolloClient';

import landingContainer from 'containers/LandingContainer/reducer';
import loginContainer from 'containers/LandingContainer/reducer';
import signupContainer from 'containers/SignupContainer/reducer';

const rootReducer = combineReducers({
  // Apply all of the reducers here.
  landingContainer,
  loginContainer,
  signupContainer,
  routing: routerReducer,
  form: formReducer,
  apollo: client.reducer(),
});

export default rootReducer;
