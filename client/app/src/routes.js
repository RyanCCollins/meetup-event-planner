import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { ApolloProvider } from 'react-apollo';
import client from './apolloClient';
import store, { history, userIsAuthenticated } from './store';
import App from 'components/App';
import * as Pages from 'pages';

const RouterApp = () => (
  <ApolloProvider store={store} client={client}>
    <Router
      history={history} // Scroll to top on route transitions
      onUpdate={() => window.scrollTo(0, 0)} // eslint-disable-line
    >
      <Route path="/" component={App}>
        <IndexRoute component={Pages.LandingPage} />
        <Route path="/signup" component={Pages.SignupPage} />
        <Route path="/login" component={Pages.LoginPage} />
        <Route path="/events" component={Pages.EventsPage} />
        <Route path="/events/:eventId" component={Pages.EventPage} />
        <Route path="/create-event" component={userIsAuthenticated(Pages.CreateEventPage)} />
        <Route path="/user/profile" component={userIsAuthenticated(Pages.ProfilePage)} />
        <Route path="/logout" component={Pages.LogoutPage} />
        <Route path="*" component={Pages.NotFoundPage} />
      </Route>
    </Router>
  </ApolloProvider>
);

export default RouterApp;
