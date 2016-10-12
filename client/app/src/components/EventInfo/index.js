import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Box from 'grommet-udacity/components/Box';
import Heading from 'grommet-udacity/components/Heading';
import Paragraph from 'grommet-udacity/components/Paragraph';
import Button from 'grommet-udacity/components/Button';
import Footer from 'grommet-udacity/components/Footer';
import ScheduleNewIcon from 'grommet-udacity/components/icons/base/ScheduleNew';
import parseDates from './utils/dates';

const EventInfo = ({
  event,
}) => (
  <Box
    colorIndex="light-1"
    size="auto"
    pad={{ horizontal: 'large', vertical: 'medium' }}
    className={styles.eventInfo}
  >
    <Heading className={styles.eventHeading} align="start" tag="h2">
      {event.name}
    </Heading>
    <Heading align="end" tag="h4">
      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
    </Heading>
    <Heading align="end" tag="h5">
      Hosted by {event.host.name}
    </Heading>
    <Heading align="end" tag="h5">
      {parseDates(event.startDate, event.endDate)}
    </Heading>
    <Heading align="end" tag="h5">
      {`${event.guests.length} people are attending`}
    </Heading>
    <Paragraph>
      {event.message}
    </Paragraph>
    <Footer justify="center">
      <Button
        href={`/events/${event.id}`}
        label="View Details"
        icon={<ScheduleNewIcon />}
        onClick={e => e}
      />
    </Footer>
  </Box>
);

EventInfo.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    host: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    guests: PropTypes.array.isRequired,
  }),
};

export default cssModules(EventInfo, styles);
