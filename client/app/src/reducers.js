import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import client from './apolloClient';

import appState from 'components/App/reducer';
import landingContainer from 'containers/LandingContainer/reducer';
import loginContainer from 'containers/LandingContainer/reducer';
import signupContainer from 'containers/SignupContainer/reducer';
import createEventContainer from 'containers/CreateEventContainer/reducer';

const rootReducer = combineReducers({
  // Apply all of the reducers here.
  appState,
  landingContainer,
  loginContainer,
  signupContainer,
  createEventContainer,
  routing: routerReducer,
  form: formReducer,
  apollo: client.reducer(),
});

export default rootReducer;
