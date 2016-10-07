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
import Hero from 'grommet-udacity/components/Hero';
import CalendarIcon from 'grommet-udacity/components/icons/base/Calendar';

class EventsContainer extends Component {
  constructor() {
    super();
    this.handleMore = this.handleMore.bind(this);
  }
  handleMore() {
    const {
      actions,
      refetch,
    } = this.props;
    actions.eventsIncrementCurrent();
    refetch();
  }
  render() {
    const {
      events,
      loading,
      eventsCount,
    } = this.props;
    return (
      <Box align="center" align="center">
        <Hero size="small" justify="center" align="center">
          <Box style={{ width: '100%' }} align="center" justify="center">
            <CalendarIcon align="center" size="large" />
            <Heading align="center">
              Meetup Events
            </Heading>
            <Button href="/create-event" label="Create Event" onClick={e => e} />
          </Box>
        </Hero>
        <Section>
          <Heading align="center">
            Event List
          </Heading>
          {loading &&
            <LoadingIndicator isLoading={loading} />
          }
          {events && events.length > 0 &&
            <List
              onMore={() => events.length + 1 >= eventsCount ? null : this.handleMore()}
            >
              <Box align="center" justify="center">
                {events.map((event, i) =>
                  <ListItem key={i}>
                    <EventInfo event={event} />
                  </ListItem>
                )}
              </Box>
            </List>
          }
        </Section>
      </Box>
    );
  }
}

EventsContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  eventsCount: PropTypes.number,
  events: PropTypes.array,
  current: PropTypes.number.isRequired,
  refetch: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  current: state.eventsContainer.current,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    EventsActionCreators,
    dispatch
  ),
});

const getEventsQuery = gql`
  query getEvents($first: Int) {
    events(first: $first) {
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
    eventsCount
  }
`;

const ContainerWithData = graphql(getEventsQuery, {
  options: (ownProps) => ({
    variables: {
      first: ownProps.current,
    },
  }),
  props: ({ data: { events, eventsCount, loading, refetch } }) => ({
    loading,
    events,
    eventsCount,
    refetch,
  }),
})(EventsContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithData);
