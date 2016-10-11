// Copyright ©️ 2016 - Ryan Collins
// admin@ryancollins.io
// http://www.ryancollins.io
// Open sourced under the MIT license
// See LICENSE.md file for details

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LoginActionCreators from './actions';
import * as AppActions from 'components/App/actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Section from 'grommet-udacity/components/Section';
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
    this.handleShowingTips = this.handleShowingTips.bind(this);
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
  handleShowingTips(isShowing) {
    const {
      toggleLoginTips,
    } = this.props.actions;
    toggleLoginTips(isShowing);
  }
  render() {
    const {
      message,
      isLoading,
      fields,
      errorMessage,
      isShowingTips,
      invalid,
    } = this.props;
    return (
      <Section
        pad={{ horizontal: 'large' }}
        align="center"
        justify="center"
        className={styles.login}
      >
        {isLoading &&
          <LoadingIndicator message="Submitting" isLoading={isLoading} />
        }
        <LoginForm
          {...fields}
          isShowingPasswordTips={isShowingTips}
          onPasswordFocus={() => this.handleShowingTips(true)}
          onPasswordBlur={() => this.handleShowingTips(false)}
          invalid={invalid}
          onSubmit={this.handleSubmit}
        />
        {errorMessage &&
          <ToastMessage
            message={errorMessage}
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
      </Section>
    );
  }
}

Login.propTypes = {
  mutate: PropTypes.func.isRequired,
  user: PropTypes.object,
  actions: PropTypes.object.isRequired,
  errorMessage: PropTypes.string,
  message: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  fields: PropTypes.object.isRequired,
  invalid: PropTypes.bool.isRequired,
  isShowingTips: PropTypes.bool.isRequired,
};

Login.contextTypes = {
  router: PropTypes.func.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  errorMessage: state.loginContainer.error,
  message: state.loginContainer.message,
  isLoading: state.loginContainer.isLoading,
  isShowingTips: state.loginContainer.isShowingTips,
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
