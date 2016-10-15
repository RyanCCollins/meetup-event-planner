// Copyright ©️ 2016 - Ryan Collins
// admin@ryancollins.io
// http://www.ryancollins.io
// Open sourced under the MIT license
// See LICENSE.md file for details

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SignupActionCreators from './actions';
import * as AppActions from '../../components/App/actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Section from 'grommet-udacity/components/Section';
import { SignupForm, ToastMessage, LoadingIndicator } from 'components';
import validation from './utils/validation';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { reduxForm } from 'redux-form';
import authUserDataFragment from './authUserDataFragment';

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
  render() {
    const {
      fields,
      errorMessage,
      message,
      isLoading,
      invalid,
      isShowingTips,
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
        <SignupForm
          {...fields}
          isShowingPasswordTips={isShowingTips}
          onPasswordFocus={() => this.handleShowingTips(true)}
          onPasswordBlur={() => this.handleShowingTips(false)}
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
  errorMessage: PropTypes.string,
  message: PropTypes.string,
  actions: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  isShowingTips: PropTypes.bool.isRequired,
};

Signup.contextTypes = {
  router: PropTypes.func.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  message: state.signupContainer.message,
  errorMessage: state.signupContainer.error,
  isLoading: state.signupContainer.isLoading,
  isShowingTips: state.signupContainer.isShowingTips,
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
  mutation signUpUser($userSignup: UserSignupInput) {
      SignUp(input: { user_signup: $userSignup }) {
          user {
            ...authUserData
          }
        }
      }
`;

const ContainerWithMutations = graphql(createUserMutation, {
  options: () => ({
    fragments: [authUserDataFragment],
  }),
})(Container);

const FormContainer = reduxForm({
  form: 'Signup',
  fields: formFields,
  validate: validation,
})(ContainerWithMutations);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormContainer);
