import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ProfileActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';

class Profile extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.profile}>

      </div>
    );
  }
}

Profile.propTypes = {
  authToken: PropTypes.string.isRequired,
  user: PropTypes.object,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  user: state.appState.user,
  token: state.appState.authToken,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    ProfileActionCreators,
    dispatch
  ),
});

const Container = cssModules(Profile, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
