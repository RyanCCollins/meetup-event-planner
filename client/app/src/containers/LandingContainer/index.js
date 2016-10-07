import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Heading from 'grommet-udacity/components/Heading';
import Box from 'grommet-udacity/components/Box';
import Section from 'grommet-udacity/components/Section';
import Button from 'grommet-udacity/components/Button';
import CalendarIcon from 'grommet-udacity/components/icons/base/Calendar';

class Landing extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      user,
    } = this.props;
    return (
      <Section align="center" justify="center" className={styles.landing}>
        <CalendarIcon size="large" />
        <Heading align="center" tag="h1">
          Meetup Event Planner
        </Heading>
        <Heading align="center" tag="h3">
          Serving all of your Meetup Needs
        </Heading>
        <Box direction="column" justify="between" className={styles.buttonBox}>
          <Button label="View Events" href="/events" />
          {!user.authToken && <Button label="Sign Up" href="/signup" />}
          {!user.authToken && <Button label="Log In" href="/login" />}
        </Box>
      </Section>
    );
  }
}

Landing.propTypes = {
  user: PropTypes.object,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  user: state.authReducer.user,
});

const Container = cssModules(Landing, styles);

export default connect(
  mapStateToProps,
  null,
)(Container);
