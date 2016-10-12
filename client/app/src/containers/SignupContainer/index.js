// Copyright ©️ 2016 - Ryan Collins
// admin@ryancollins.io
// http://www.ryancollins.io
// Open sourced under the MIT license
// See LICENSE.md file for details

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SignupActionCreators from './actions';
import * as AppActions from 'components/App/actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Section from 'grommet-udacity/components/Section';
import { SignupForm, ToastMessage, LoadingIndicator } from 'components';
import validation from './utils/validation';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { reduxForm } from 'redux-form';

export const formFields = [
  'nameInput',
  'emailInput',
  'passwordInput',
  'passwordConfirmationInput',
  'bioInput',
  'employerInput',
];

class Signup extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClosingToast = this.handleClosingToast.bind(this);
    this.handleShowingTips = this.handleShowingTips.bind(this);
  }
  handleSubmit() {
    const {
      fields,
      actions,
      mutate,
    } = this.props;
    const variables = {
      variables: SignupActionCreators.fieldsToData(fields),
    };
    actions.signupSetLoading();
    mutate(variables)
      .then(result => {
        const {
          user,
        } = result.data.SignUp;
        if (!user) {
          throw new Error('An error has occured.');
        }
        actions.setPersistentUser(user);
        actions.signupShowMessage('Thanks for signing up! Just a moment while we tidy up.');
        setTimeout(() => {
          this.context.router.push('/user/profile');
        }, 2000);
      })
      .catch(err => {
        actions.signupShowError(err.message || 'An unknown error has occured');
      });
  }
  handleClosingToast(type) {
    const {
      clearSignupToast,
    } = this.props.actions;
    clearSignupToast(type);
  }
  handleShowingTips(isShowing) {
    const {
      toggleSignupTips,
    } = this.props.actions;
    toggleSignupTips(isShowing);
  }
  handleInvalidateTip() {
    const {
      invalidateTip,
      toggleSignupTips,
    } = this.props.actions;
    toggleSignupTips(false);
    setTimeout(() => {
      invalidateTip();
    }, 400);
  }
  render() {
    const {
      fields,
      error,
      message,
      isLoading,
      invalid,
      isShowingTips,
      tipIsValid,
    } = this.props;
    return (
      <Section
        size="auto"
        pad={{ horizontal: 'large' }}
        align="center"
        justify="center"
        className={styles.signup}
      >
        {isLoading &&
          <LoadingIndicator message="Submitting" isLoading={isLoading} />
        }
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
        <SignupForm
          {...fields}
          isShowingPasswordTips={isShowingTips}
          onInvalidateTip={() => this.handleInvalidateTip()}
          onPasswordFocus={() => this.handleShowingTips(true)}
          onPasswordBlur={() => this.handleShowingTips(false)}
          tipIsValid={tipIsValid}
          invalid={invalid}
          onSubmit={this.handleSubmit}
        />
      </Section>
    );
  }
}

Signup.propTypes = {
  fields: PropTypes.object.isRequired,
  mutate: PropTypes.func.isRequired,
  error: PropTypes.string,
  message: PropTypes.string,
  actions: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  isShowingTips: PropTypes.bool.isRequired,
  tipIsValid: PropTypes.bool.isRequired,
};

Signup.contextTypes = {
  router: PropTypes.func.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  message: state.signupContainer.message,
  error: state.signupContainer.error,
  isLoading: state.signupContainer.isLoading,
  isShowingTips: state.signupContainer.isShowingTips,
  tipIsValid: state.signupContainer.tipIsValid,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    Object.assign({},
      SignupActionCreators,
      AppActions
    ),
    dispatch
  ),
});

const Container = cssModules(Signup, styles);

const createUserMutation = gql`
  mutation signUpUser($name: String!, $email:String!,
    $password: String!, $passwordConfirmation: String!) {
      SignUp(input: { name: $name, email: $email,
        password: $password, password_confirmation: $passwordConfirmation }) {
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

const ContainerWithMutations = graphql(createUserMutation)(Container);

const FormContainer = reduxForm({
  form: 'Signup',
  fields: formFields,
  validate: validation,
})(ContainerWithMutations);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormContainer);
