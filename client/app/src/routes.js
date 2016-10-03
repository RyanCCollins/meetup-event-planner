import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { ApolloProvider } from 'react-apollo';
import client from './apolloClient';
import store, { history } from './store';
/* eslint-disable */
import App from 'components/App';
import * as Pages from 'pages';
/* eslint-enable */

const routes = (
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
        <Route path="/events/:event_id" component={Pages.EventPage} />
        <Route path="/create-event" component={Pages.CreateEventPage} />
        <Route path="*" component={Pages.NotFoundPage} />
      </Route>
    </Router>
  </ApolloProvider>
);

export default routes;
