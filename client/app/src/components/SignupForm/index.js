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
import Paragraph from 'grommet-udacity/components/Paragraph';
import { AuthFormFooter, ToolTip } from 'components';
import calculatedError from './utils/error';

const checkMatches = (field1, field2) =>
  field1.value !== field2.value && field2.touched ?
    'Passwords must match' : null;

const SignupForm = ({
  onSubmit,
  nameInput,
  emailInput,
  passwordInput,
  passwordConfirmationInput,
  bioInput,
  employerInput,
  invalid,
  isShowingPasswordTips,
  onPasswordFocus,
  onPasswordBlur,
}) => (
  <Box
    className={styles.signupForm}
    pad={{ horizontal: 'large' }}
  >
    <Form>
      <Heading strong align="center">
        Meetup Event Planner
      </Heading>
      <Heading align="center" tag="h5">
        Signup
      </Heading>
      <ToolTip onClose={onPasswordBlur} isShowing={isShowingPasswordTips}>
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
      </ToolTip>
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
            autoFocus
            placeholder="Bill Clinton"
            id="nameInput"
            autoComplete="on"
            name="name"
            type="text"
            aria-invalid={nameInput.error}
            aria-required
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
            autoComplete="on"
            aria-required
            aria-invalid={emailInput.error}
            name="email"
            placeholder="bill@clinton.com"
            type="email"
            className={styles.input}
          />
        </FormField>
        <FormField
          help="Start typing for password tips"
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
            autoComplete="off"
            aria-required
            aria-invalid={passwordInput.error}
            onFocus={onPasswordFocus}
            onBlur={onPasswordBlur}
            onClick={onPasswordFocus}
            className={styles.input}
          />
        </FormField>
        <FormField
          help="Confirm your password"
          label="Password Confirmation *"
          htmlFor="passwordConfirmationInput"
          className={styles.formField}
          error={
            calculatedError(passwordConfirmationInput) ||
              checkMatches(passwordInput, passwordConfirmationInput)
          }
        >
          <input
            {...passwordConfirmationInput}
            required
            id="passwordConfirmationInput"
            type="password"
            aria-invalid={passwordConfirmationInput.error}
            aria-required
            name="password"
            className={styles.input}
          />
        </FormField>
        <FormField
          label="Bio"
          className={styles.formField}
          help="Optional Bio for Profile"
          htmlFor="bio-input"
        >
          <textarea
            {...bioInput}
            id="bio-input"
            name="bio"
            type="text"
            autoComplete="off"
            rows="3"
            placeholder={'Hi, my name is Bill. I used ' +
              'to be the president of the US.  Vote for Hillary.'
            }
            cols="40"
          />
        </FormField>
        <FormField
          label="Employer"
          className={styles.formField}
          help="Optional Employer Field"
          htmlFor="employer-input"
        >
          <input
            {...employerInput}
            name="organization"
            autoComplete="on"
            aria-required={false}
            aria-invalid={employerInput.error}
            placeholder="Udacity"
            id="employer-input"
            type="text"
          />
        </FormField>
      </FormFields>
      <Footer pad={{ vertical: 'medium' }} align="center">
        <Button
          onClick={
            invalid ||
              checkMatches(passwordInput, passwordConfirmationInput) !== null ?
                null : onSubmit
          }
          fill
          label="Submit"
          primary
        />
      </Footer>
      <AuthFormFooter text="Already a member?" link="/login" />
    </Form>
  </Box>
);

SignupForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  nameInput: PropTypes.object.isRequired,
  emailInput: PropTypes.object.isRequired,
  passwordInput: PropTypes.object.isRequired,
  passwordConfirmationInput: PropTypes.object.isRequired,
  bioInput: PropTypes.object.isRequired,
  employerInput: PropTypes.object.isRequired,
  invalid: PropTypes.bool.isRequired,
  onPasswordFocus: PropTypes.func.isRequired,
  onPasswordBlur: PropTypes.func.isRequired,
  isShowingPasswordTips: PropTypes.bool.isRequired,
};

export default cssModules(SignupForm, styles);
