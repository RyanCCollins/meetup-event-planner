import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LandingActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Heading from 'grommet-udacity/components/Heading';
import Box from 'grommet-udacity/components/Box';
import Button from 'grommet-udacity/components/Button';
import CalendarIcon from 'grommet-udacity/components/icons/base/Calendar';

class Landing extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Box align="center" justify="center" className={styles.landing}>
        <CalendarIcon size="large" />
        <Heading align="center" tag="h1">
          Meetup Event Planner
        </Heading>
        <Button label="View Events" href="/events" />
        <Button label="Sign Up" href="/signup" />
        <Button label="Log In" href="/login" />
      </Box>
    );
  }
}

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  // myProp: state.myProp,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    LandingActionCreators,
    dispatch
  ),
});

const Container = cssModules(Landing, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
