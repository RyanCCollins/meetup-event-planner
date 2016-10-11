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
import Tip from 'grommet-udacity/components/Tip';
import Paragraph from 'grommet-udacity/components/Paragraph';
import { AuthFormFooter } from 'components';
import calculatedError from 'utils/error';

const LoginForm = ({
  passwordInput,
  emailInput,
  onSubmit,
  invalid,
  isShowingPasswordTips,
  onPasswordFocus,
  onPasswordBlur,
}) => (
  <Box
    size={{ width: { max: 'large' } }}
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
      {isShowingPasswordTips &&
        <Tip target="passwordInput" onClose={onPasswordBlur}>
          <Box size="medium">
            <Heading tag="h4" align="center">
              Secure Password Tips
            </Heading>
            <Heading tag="h5" align="center">
              Password must have at least
            </Heading>
            <ul>
              <li>
                <Paragraph className={styles.listItem}>
                  1. Eight characters total
                </Paragraph>
              </li>
              <li>
                <Paragraph className={styles.listItem}>
                  2. One uppercase character
                </Paragraph>
              </li>
              <li>
                <Paragraph className={styles.listItem}>
                  3. One special character
                </Paragraph>
              </li>
              <li>
                <Paragraph className={styles.listItem}>
                  4. One numerical character
                </Paragraph>
              </li>
            </ul>
          </Box>
        </Tip>
      }
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
            onFocus={onPasswordFocus}
            onBlur={onPasswordBlur}
            onClick={onPasswordFocus}
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
  onPasswordFocus: PropTypes.func.isRequired,
  onPasswordBlur: PropTypes.func.isRequired,
  isShowingPasswordTips: PropTypes.bool.isRequired,
};

export default cssModules(LoginForm, styles);
