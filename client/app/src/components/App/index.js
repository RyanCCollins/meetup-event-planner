import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import { Navbar } from 'components';

class Main extends Component {
  componentDidMount() {
    const {
      setAuthToken,
    } = this.props.actions;
    if (window && localStorage) {
      const token = localStorage.getItem('auth_token');
      if (token) {
        setAuthToken(token);
      }
    }
  }
  render() {
    return (
      <div>
        <Navbar />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

Main.propTypes = {
  children: React.children,
  actions: PropTypes.object.isRequired,
  token: PropTypes.string,
};

// Map the global state to global props here.
// See: https://egghead.io/lessons/javascript-redux-generating-containers-with-connect-from-react-redux-visibletodolist
// mapStateToProps :: {State} -> {Action}
const mapStateToProps = (state) => ({
  token: state.appState.authToken,
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
