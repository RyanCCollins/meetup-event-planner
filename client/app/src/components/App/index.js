import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import { Navbar } from 'components';

class Main extends Component {
  componentDidMount() {
    const {
      loadPersistedUser,
    } = this.props.actions;
    loadPersistedUser();
  }
  render() {
    const {
      user,
    } = this.props;
    return (
      <div>
        <Navbar
          isAuthenticated={user && user.authToken != null} // eslint-disable-line
        />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

Main.propTypes = {
  children: React.children,
  actions: PropTypes.object.isRequired,
  user: PropTypes.object,
};

// Map the global state to global props here.
// See: https://egghead.io/lessons/javascript-redux-generating-containers-with-connect-from-react-redux-visibletodolist
// mapStateToProps :: {State} -> {Action}
const mapStateToProps = (state) => ({
  user: state.authReducer.user,
});

// Map the dispatch and bind the action creators.
// See: http://redux.js.org/docs/api/bindActionCreators.html
// mapDispatchToProps :: Dispatch Func -> {Actions}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    actionCreators,
    dispatch
  ),
});

// Use connect both here and in your components.
// See: https://egghead.io/lessons/javascript-redux-generating-containers-with-connect-from-react-redux-visibletodolist
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export default App;
