import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Section from 'grommet-udacity/components/Section';
import Heading from 'grommet-udacity/components/Heading';
import Box from 'grommet-udacity/components/Box';
import Paragraph from 'grommet-udacity/components/Paragraph';
import Article from 'grommet-udacity/components/Article';
import CalendarIcon from 'grommet-udacity/components/icons/base/Calendar';
import LocationIcon from 'grommet/components/icons/base/Location';
import ClockIcon from 'grommet/components/icons/base/Clock';
import Footer from 'grommet/components/Footer';
import Button from 'grommet-udacity/components/Button';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import moment from 'moment';

const SingleEvent = ({
  event,
}) => (
  <Box align="center" justify="center">
    <Section justify="center">
      <Article className={styles.panel} pad={{ horizontal: 'small' }}>
        <Section>
          <Box pad={{ vertical: 'large' }} align="center">
            <CalendarIcon size="large" />
          </Box>
          <Heading align="center" tag="h3">
            {`It's a ${event.type} Party!`}
          </Heading>
          <Heading align="center">
            {event.name}
          </Heading>
          <Heading align="center" tag="h4">
            {`Hosted by ${event.host.name}`}
          </Heading>
        </Section>
        <Section>
          <Box justify="center" align="center" direction="column">
            <LocationIcon className={styles.icon} />
            <Heading tag="h4" align="center">
              {`${event.location}`}
            </Heading>
          </Box>
          <Box justify="center" align="center" direction="column">
            <ClockIcon className={styles.icon} />
            <Heading align="center" tag="h5">
              {`From: ${moment(event.start).format('LLL')}`}
            </Heading>
            <Heading align="center" tag="h5">
              {`To: ${moment(event.end).format('LLL')}`}
            </Heading>
          </Box>
        </Section>
        <Section>
          <Heading tag="h3" align="center">
            About
          </Heading>
          <Paragraph size="large" className={styles.paragraph}>
            {event.message}
          </Paragraph>
        </Section>
        <Section>
          <Heading tag="h3" align="center">
            Guest List
          </Heading>
          <Box justify="center" align="center" direction="column">
            <List>
              {event.guests.map((guest, i) =>
                <ListItem key={i}>
                  {guest.name}
                </ListItem>
              )}
            </List>
          </Box>
        </Section>
        <Footer align="center" justify="center" pad={{ vertical: 'medium' }}>
          <Button onClick={e => e} label="RSVP" />
        </Footer>
      </Article>
    </Section>
  </Box>
);

SingleEvent.propTypes = {

};

export default cssModules(SingleEvent, styles);
