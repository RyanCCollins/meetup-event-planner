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
import calculatedError from './utils/error';

const LoginForm = ({
  passwordInput,
  emailInput,
  onSubmit,
  invalid,
}) => (
  <Box
    className={styles.loginForm}
    pad={{ horizontal: 'large' }}
  >
    <Form>
      <Heading strong align="center">
        Meetup Event Planner
      </Heading>
      <Heading align="center" tag="h5">
        Login
      </Heading>
      <FormFields>
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
            autoFocus
            id="emailInput"
            name="email"
            type="email"
            className={styles.input}
          />
        </FormField>
        <FormField
          help="Gotta be secure"
          error={calculatedError(passwordInput)}
          label="Password *"
          htmlFor="passwordInput"
          className={styles.formField}
        >
          <input
            {...passwordInput}
            required
            name="password"
            id="passwordInput"
            type="password"
            className={styles.input}
          />
        </FormField>
      </FormFields>
      <Footer pad={{ vertical: 'medium' }} align="center">
        <Button onClick={invalid ? null : onSubmit} fill label="Submit" primary />
      </Footer>
      <AuthFormFooter text="Need an Account?" link="/signup" />
    </Form>
  </Box>
);

LoginForm.propTypes = {
  passwordInput: PropTypes.object.isRequired,
  emailInput: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool.isRequired,
};

export default cssModules(LoginForm, styles);
