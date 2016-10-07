import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import client from './apolloClient';

import authReducer from 'components/App/reducer';
import loginContainer from 'containers/LoginContainer/reducer';
import signupContainer from 'containers/SignupContainer/reducer';
import createEventContainer from 'containers/CreateEventContainer/reducer';
import eventsContainer from 'containers/EventsContainer/reducer';
import profileContainer from 'containers/ProfileContainer/reducer';

const rootReducer = combineReducers({
  // Apply all of the reducers here.
  authReducer,
  loginContainer,
  signupContainer,
  createEventContainer,
  profileContainer,
  eventsContainer,
  routing: routerReducer,
  form: formReducer,
  apollo: client.reducer(),
});

export default rootReducer;
