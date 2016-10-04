import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SignupActionCreators from './actions';
import * as AppActions from 'components/App/actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Section from 'grommet-udacity/components/Section';
import { SignupForm } from 'components';
import validation from './utils/validation';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { reduxForm } from 'redux-form';

export const formFields = [
  'nameInput',
  'emailInput',
  'passwordInput',
  'passwordConfirmationInput',
];

class Signup extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
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
    mutate(variables)
      .then(res => {
        if (!res.data) {
          throw new Error('An error has occured.');
        }
        console.log(res.data);
        actions.signupShowMessage('Thanks for signing up! Just a moment while we tidy up.');
      })
      .catch(err => {
        actions.signupShowError(err.message || 'An unknown error has occured');
      });
  }
  render() {
    const {
      fields,
    } = this.props;
    return (
      <Section
        size="auto"
        pad={{ horizontal: 'large' }}
        align="center"
        justify="center"
        className={styles.signup}
      >
        <SignupForm
          {...fields}
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
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  message: state.signupContainer.message,
  error: state.signupContainer.error,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    { ...SignupActionCreators, ...AppActions },
    dispatch
  ),
});

const Container = cssModules(Signup, styles);

const createUserMutation = gql`
  mutation signUpUser($name: String!, $email:String!,
    $password: String!, $passwordConfirmation: String!) {
      SignUp(input: { name: $name, email: $email,
        password: $password, password_confirmation: $passwordConf }) {
          user {
            id
            bio
            email
            name
            token: auth_token
          }
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
