import { createStore, compose, applyMiddleware } from 'redux';
import {
  syncHistoryWithStore,
  routerActions,
  routerMiddleware,
} from 'react-router-redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import createLogger from 'redux-logger';
import rootReducer from './reducers';
import { UserAuthWrapper as userAuthWrapper } from 'redux-auth-wrapper';
const isClient = typeof document !== 'undefined';
const isDeveloping = process.env.NODE_ENV !== 'production';
import client from './apolloClient';

import { initialState as landingContainer } from 'containers/LandingContainer/reducer';
import { initialState as signupContainer } from 'containers/SignupContainer/reducer';
import { initialState as loginContainer } from 'containers/LoginContainer/reducer';
import { initialState as createEventContainer } from 'containers/CreateEventContainer/reducer';
import { initialState as appState } from 'components/App/reducer';
import { initialState as profileContainer } from 'containers/ProfileContainer/reducer';

const initialState = {
  appState,
  landingContainer,
  signupContainer,
  profileContainer,
  loginContainer,
  createEventContainer,
};

/* Commonly used middlewares and enhancers */
/* See: http://redux.js.org/docs/advanced/Middleware.html*/
const loggerMiddleware = createLogger();
const routingMiddleware = routerMiddleware(browserHistory);
const middlewares = [thunk, client.middleware(), routingMiddleware];

if (isDeveloping && isClient) {
  middlewares.push(loggerMiddleware);
}

/* Everyone should use redux dev tools */
/* https://github.com/gaearon/redux-devtools */
/* https://medium.com/@meagle/understanding-87566abcfb7a */
const enhancers = [];
const devToolsExtension = window.devToolsExtension;
if (isClient && isDeveloping) {
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
);

/* Hopefully by now you understand what a store is and how redux uses them,
 * But if not, take a look at: https://github.com/reactjs/redux/blob/master/docs/api/createStore.md
 * And https://egghead.io/lessons/javascript-redux-implementing-store-from-scratch
 */
const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers,
);

/* See: https://github.com/reactjs/react-router-redux/issues/305 */
export const history = syncHistoryWithStore(browserHistory, store);

export const userIsAuthenticated = userAuthWrapper({
  authSelector: (state) => ({
    authToken: state.appState.authToken,
  }),
  redirectAction: routerActions.replace,
  failureRedirectPath: '/login',
  wrapperDisplayName: 'userIsAuthenticated',
});

/* Hot reloading of reducers.  How futuristic!! */
if (module.hot) {
  module.hot.accept('./reducers', () => {
    /*eslint-disable */ // Allow require
    const nextRootReducer = require('./reducers').default;
    /*eslint-enable */
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
