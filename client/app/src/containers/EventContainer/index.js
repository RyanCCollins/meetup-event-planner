import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as EventActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';

class Event extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.event}>
      </div>
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
    EventActionCreators,
    dispatch
  ),
});

const Container = cssModules(Event, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
