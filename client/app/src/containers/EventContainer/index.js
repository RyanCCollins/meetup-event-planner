import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as EventActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Section from 'grommet-udacity/components/Section';
import Heading from 'grommet-udacity/components/Heading';
import Box from 'grommet-udacity/components/Box';
import { ToastMessage, LoadingIndicator } from 'components';

class Event extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      loading,
      error,
      event,
    } = this.props;
    return (
      <Section className={styles.event}>
        {
          error &&
          <ToastMessage status="critical" message={error} onClose={(e) => e} />
        }
        {
          loading ?
            <LoadingIndicator isLoading={loading} />
          :
            <Box>
              <Heading align="center">
                {event.name}
              </Heading>
            </Box>
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
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  // myProp: state.myProp,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    EventActionCreators,
    dispatch
  ),
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
  options: ({ ownProps }) => ({
    variables: {
      id: ownProps.params.eventId,
    },
  }),
  props: ({ data: { loading, event, error } }) => ({
    loading,
    event,
    error,
  }),
})(Container);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithData);
