import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as EventsActionCreators from './actions';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { EventInfo, LoadingIndicator } from 'components';
import Section from 'grommet-udacity/components/Section';
import Box from 'grommet-udacity/components/Box';
import List from 'grommet-udacity/components/List';
import ListItem from 'grommet-udacity/components/ListItem';
import Button from 'grommet-udacity/components/Button';
import Heading from 'grommet-udacity/components/Heading';
import CalendarIcon from 'grommet-udacity/components/icons/base/Calendar';

class EventsContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      events,
      loading,
    } = this.props;
    return (
      <Box align="center">
        <Section align="center" justify="center">
          <CalendarIcon size="large" />
          <Heading align="center">
            Events
          </Heading>
        </Section>
        <Button href="/create-event" label="Create Event" onClick={e => e} />
        <Section>
          {loading ?
            <LoadingIndicator isLoading={loading} />
          :
            <List>
              {events
                .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
                .map((event, i) =>
                  <ListItem key={i}>
                    <EventInfo event={event} />
                  </ListItem>
              )}
            </List>
          }
        </Section>
      </Box>
    );
  }
}

EventsContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  events: PropTypes.array,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  // myProp: state.myProp,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    EventsActionCreators,
    dispatch
  ),
});

const getEventsQuery = gql`
  query getEvents($limit: Int) {
    events(limit: $limit) {
      id
      name
      type: event_type
      message
      location
      startDate: start_date
      endDate: end_date
      guests {
        name
      }
      host {
        id
        name
      }
    }
  }
`;

const ContainerWithData = graphql(getEventsQuery, {
  options: () => ({
    variables: {
      limit: 20,
    },
  }),
  props: ({ data: { events, loading } }) => ({
    loading,
    events,
  }),
})(EventsContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithData);
