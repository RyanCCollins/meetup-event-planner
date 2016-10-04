import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LoginActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Section from 'grommet-udacity/components/Section';
import LoginForm from 'grommet-udacity/components/LoginForm';
import Box from 'grommet-udacity/components/Box';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { AuthFormFooter } from 'components';

class Login extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {

  }
  render() {
    return (
      <Section
        pad={{ horizontal: 'large' }}
        align="center"
        justify="center"
        className={styles.login}
      >
        <Box
          className={styles.loginFormWrapper}
          colorIndex="light-1"
          align="center"
          pad={{ horizontal: 'small', vertical: 'small' }}
        >
          <LoginForm
            title="Meetup Events"
            secondaryText="Enter your credentials to Login"
            rememberMe
            forgotPassword={
              <AuthFormFooter text="Not a member?" link="/signup" />
            }
            onSubmit={this.handleSubmit}
          />
        </Box>
      </Section>
    );
  }
}

Login.propTypes = {
  mutate: PropTypes.func.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  errors: state.loginContainer.errors,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    LoginActionCreators,
    dispatch
  ),
});

const Container = cssModules(Login, styles);

const signinUserMutation = gql`
  mutation signInUser($email: String!, $password: String!) {
    SignIn(input: { email: $email, password: $password }) {
      auth_token
    }
  }
`;

const ContainerWithMutation = graphql(signinUserMutation)(Container);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithMutation);
