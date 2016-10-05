import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LoginActionCreators from './actions';
import * as AppActions from 'components/App/actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Section from 'grommet-udacity/components/Section';
import LoginForm from 'grommet-udacity/components/LoginForm';
import Box from 'grommet-udacity/components/Box';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { AuthFormFooter, LoadingIndicator, ToastMessage } from 'components';

class Login extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClosingToast = this.handleClosingToast.bind(this);
  }
  handleSubmit({ username, password }) {
    const {
      mutate,
      actions,
    } = this.props;
    actions.loginSetLoading();
    mutate({ variables: { email: username, password } })
      .then(result => {
        const token = result.data.SignIn.token;
        if (!token) {
          throw new Error('An error has occured while signing in.  Please try again.');
        }
        actions.setPersistantAuthToken(token);
        actions.loginShowMessage(
          'You were successfully logged in. Redirecting to the profile page.'
        );
        setTimeout(() => {
          const { router } = this.context;
          router.push('/user/profile');
        }, 2000);
      })
      .catch(err => {
        actions.loginShowError(err.message || 'An unknown error has occured.');
      });
  }
  handleClosingToast(type) {
    const {
      clearLoginToast,
    } = this.props.actions;
    clearLoginToast(type);
  }
  render() {
    const {
      error,
      message,
      isLoading,
    } = this.props;
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
          {isLoading &&
            <LoadingIndicator message="Submitting" isLoading={isLoading} />
          }
          <LoginForm
            title="Meetup Events"
            secondaryText="Enter your credentials to Login"
            rememberMe
            forgotPassword={
              <AuthFormFooter text="Not a member?" link="/signup" />
            }
            onSubmit={this.handleSubmit}
          />
          {error &&
            <ToastMessage
              message={error}
              status="critical"
              onClose={() => this.handleClosingToast('error')}
            />
          }
          {message &&
            <ToastMessage
              message={message}
              onClose={() => this.handleClosingToast('message')}
            />
          }
        </Box>
      </Section>
    );
  }
}

Login.propTypes = {
  mutate: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
  error: PropTypes.string,
  message: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
};

Login.contextTypes = {
  router: PropTypes.func.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  error: state.loginContainer.error,
  message: state.loginContainer.message,
  isLoading: state.loginContainer.isLoading,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    Object.assign({},
      LoginActionCreators,
      AppActions
    ),
    dispatch
  ),
});

const Container = cssModules(Login, styles);

const signinUserMutation = gql`
  mutation signInUser($email: String!, $password: String!) {
    SignIn(input: { email: $email, password: $password }) {
      token: auth_token
    }
  }
`;

const ContainerWithMutation = graphql(signinUserMutation)(Container);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithMutation);
