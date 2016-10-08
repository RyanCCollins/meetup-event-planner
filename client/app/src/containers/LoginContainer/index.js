import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LoginActionCreators from './actions';
import * as AppActions from 'components/App/actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Section from 'grommet-udacity/components/Section';
import Box from 'grommet-udacity/components/Box';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { reduxForm } from 'redux-form';
import validation from './utils/validation';
import {
  LoadingIndicator,
  ToastMessage,
  LoginForm,
} from 'components';

export const formFields = [
  'emailInput',
  'passwordInput',
];

class Login extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClosingToast = this.handleClosingToast.bind(this);
  }
  componentDidMount() {
    const {
      user,
    } = this.props;
    if (user.authToken != null) { // eslint-disable-line
      this.context.router.push('/user/profile');
    }
  }
  handleSubmit() {
    const {
      mutate,
      actions,
      fields,
    } = this.props;
    actions.loginSetLoading();
    mutate({
      variables:
      {
        email: fields.emailInput.value,
        password: fields.passwordInput.value,
      },
    })
      .then(result => {
        const user = result.data.SignIn.user;
        if (!user) {
          throw new Error('An error has occured while signing in.  Please try again.');
        }
        actions.setPersistentUser(user);
        actions.loginShowMessage(
          'You were successfully logged in. Redirecting to the profile page.'
        );
        setTimeout(() => {
          const { router } = this.context;
          router.push('/user/profile');
        }, 1000);
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
      fields,
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
            {...fields}
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
  user: PropTypes.object,
  actions: PropTypes.object.isRequired,
  error: PropTypes.string,
  message: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  fields: PropTypes.object.isRequired,
};

Login.contextTypes = {
  router: PropTypes.func.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  user: state.authReducer.user,
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
      user {
        ...authUserData
      }
    }
  }

  fragment authUserData on AuthUser {
    id
    bio
    email
    name
    avatar
    authToken: auth_token
    events {
      name
      id
    }
  }
`;

const ContainerWithMutation = graphql(signinUserMutation)(Container);

const FormContainer = reduxForm({
  form: 'Login',
  fields: formFields,
  validate: validation,
})(ContainerWithMutation);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormContainer);
