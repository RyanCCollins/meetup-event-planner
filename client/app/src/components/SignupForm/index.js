import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Form from 'grommet-udacity/components/Form';
import Heading from 'grommet-udacity/components/Heading';
import FormField from 'grommet-udacity/components/FormField';
import FormFields from 'grommet-udacity/components/FormFields';
import Footer from 'grommet-udacity/components/Footer';
import Button from 'grommet-udacity/components/Button';
import Box from 'grommet-udacity/components/Box';
import { AuthFormFooter } from 'components';
import calculatedError from 'utils/error';

const SignupForm = ({
  onSubmit,
  nameInput,
  emailInput,
  passwordInput,
  passwordConfirmationInput,
}) => (
  <Box
    size="large"
    className={styles.signupForm}
    pad={{ horizontal: 'small', vertical: 'small' }}
  >
    <Form>
      <Heading strong align="center">
        Meetup Event Planner
      </Heading>
      <Heading align="center" tag="h5">
        Signup
      </Heading>
      <FormFields>
        <FormField
          help="What should we call you?"
          error={calculatedError(nameInput)}
          label="Name *"
          htmlFor="nameInput"
          className={styles.formField}
        >
          <input
            {...nameInput}
            required
            id="nameInput"
            name="name"
            type="text"
            className={styles.input}
          />
        </FormField>
        <FormField
          help="How should we get in touch with you?"
          error={calculatedError(emailInput)}
          label="Email *"
          htmlFor="emailInput"
          className={styles.formField}
        >
          <input
            {...emailInput}
            required
            id="emailInput"
            name="email"
            type="email"
            className={styles.input}
          />
        </FormField>
        <FormField
          help="Make it secure"
          error={calculatedError(passwordInput)}
          label="Password *"
          htmlFor="passwordInput"
          className={styles.formField}
        >
          <input
            {...passwordInput}
            required
            id="passwordInput"
            name="password"
            type="password"
            className={styles.input}
          />
        </FormField>
        <FormField
          help="Confirm your password"
          label="Password Confirmation *"
          htmlFor="passwordConfirmationInput"
          className={styles.formField}
          error={calculatedError(passwordConfirmationInput)}
        >
          <input
            {...passwordConfirmationInput}
            required
            id="passwordConfirmationInput"
            type="password"
            name="password"
            className={styles.input}
          />
        </FormField>
      </FormFields>
      <Footer pad={{ vertical: 'medium' }} align="center">
        <Button onClick={onSubmit} fill label="Submit" primary />
      </Footer>
      <AuthFormFooter text="Already a member?" link="/login" />
    </Form>
  </Box>
);

SignupForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default cssModules(SignupForm, styles);
