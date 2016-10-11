// Copyright ©️ 2016 - Ryan Collins
// admin@ryancollins.io
// http://www.ryancollins.io
// Open sourced under the MIT license
// See LICENSE.md file for details

import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Section from 'grommet-udacity/components/Section';
import Box from 'grommet-udacity/components/Box';
import { ToastMessage, LoadingIndicator, SingleEvent } from 'components';

class Event extends Component {
  constructor() {
    super();
    this.handleRsvp = this.handleRsvp.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleClosingToast = this.handleClosingToast.bind(this);
    this.state = {
      errorMessage: null,
      message: null,
    };
  }
  handleRsvp() {
    const {
      mutate,
      user,
      event,
      refetch,
    } = this.props;
    const variables = {
      variables: {
        authToken: user.authToken,
        eventId: parseInt(event.id, 10),
      },
    };
    mutate(variables)
      .then(() => {
        this.handleMessage('See you at the event!');
        refetch();
      })
      .catch(err => {
        this.handleError(err.message);
      });
  }
  handleError(errorMessage) {
    this.setState({
      errorMessage,
    });
  }
  handleMessage(message) {
    this.setState({
      message,
    });
  }
  handleClosingToast(type) {
    switch (type) {
      case 'error':
        this.setState({
          errorMessage: null,
        });
        break;
      case 'message':
        this.setState({
          message: null,
        });
        break;
      default:
        break;
    }
  }
  render() {
    const {
      loading,
      error,
      event,
      user,
    } = this.props;
    const {
      errorMessage,
      message,
    } = this.state;
    return (
      <Section className={styles.event}>
        {error &&
          <ToastMessage
            status="critical"
            message={error}
            onClose={(e) => e}
          />
        }
        {loading ?
            <LoadingIndicator isLoading={loading} />
          :
            <Box align="center" justify="center">
              <SingleEvent
                user={user}
                onRsvp={this.handleRsvp}
                event={event}
              />
            </Box>
        }
        {errorMessage &&
          <ToastMessage
            message={errorMessage}
            status="critical"
            onClose={() => this.handleClosingToast('error')}
          />
        }
        {message &&
          <ToastMessage
            message={message}
            onClose={() => this.handleClosingToast('message')}
          />
        }
      </Section>
    );
  }
}

Event.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  event: PropTypes.object,
  params: PropTypes.object.isRequired,
  refetch: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  mutate: PropTypes.func.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  user: state.authReducer.user,
});

const Container = cssModules(Event, styles);

const singleEventQuery = gql`
  query singleEvent($id: ID!) {
    event(id: $id) {
      ...eventInfo
    }
  }

  fragment eventInfo on Event {
    id
    name
    end: end_date
    start:start_date
    type: event_type
    location
    message
    host {
      name
    }
    guests {
      name
    }
  }
`;

const ContainerWithData = graphql(singleEventQuery, {
  options: (ownProps) => ({
    variables: {
      id: ownProps.params.eventId,
    },
  }),
  props: ({ data: { loading, event, error, refetch } }) => ({
    loading,
    event,
    error,
    refetch,
  }),
})(Container);

const singleEventMutation = gql`
  mutation rsvp($eventId: Int!, $authToken:String!) {
    RSVP(input: { event_id: $eventId, auth_token: $authToken }) {
      event {
        guests {
          name
        }
      }
    }
  }
`;

const ContainerWithMutations = graphql(singleEventMutation)(ContainerWithData);


export default connect(
  mapStateToProps,
)(ContainerWithMutations);
