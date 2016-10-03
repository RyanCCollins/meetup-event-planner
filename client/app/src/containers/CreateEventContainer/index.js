import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CreateEventActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Section from 'grommet-udacity/components/Section';
import Heading from 'grommet-udacity/components/Heading';
import { EventForm } from 'components';
import { reduxForm } from 'redux-form';

export const formFields = [
  'nameInput',
  'startDateInput',
  'endDateInput',
  'typeInput',
  'hostInput',
  'locationInput',
  'guestsInput',
];

class CreateEvent extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      fields,
    } = this.props;
    return (
      <Section className={styles.createEvent}>
        <Heading align="center">
          Create an Event
        </Heading>
        <EventForm
          {...fields}
          pastHosts={['Ryan Collins', 'David Harris', 'Andreas Daimainger']}
          pastGuests={['Ryan Collins', 'David Harris', 'Andreas Daimainger']}
        />
      </Section>
    );
  }
}

CreateEvent.propTypes = {
  fields: PropTypes.object.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  // myProp: state.myProp,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    CreateEventActionCreators,
    dispatch
  ),
});

const Container = cssModules(CreateEvent, styles);

const FormContainer = reduxForm({
  form: 'CreateEvent',
  fields: formFields,
})(Container);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormContainer);
