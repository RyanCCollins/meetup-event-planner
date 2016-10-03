import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Form from 'grommet-udacity/components/Form';
import FormFields from 'grommet-udacity/components/FormFields';
import FormField from 'grommet-udacity/components/FormField';
import DateTime from 'grommet-udacity/components/DateTime';
import SearchInput from 'grommet-udacity/components/SearchInput';
import Select from 'grommet-udacity/components/Select';

const EventForm = ({
  onSubmit,
  nameInput,
  typeInput,
  hostInput,
  locationInput,
  guestsInput,
  startDateInput,
  endDateInput,
  pastGuests,
  pastHosts,
  eventTypes,
}) => (
  <Form className={styles.eventForm}>
    <FormFields>
      <FormField
        label="Name"
        htmlFor="name-input"
        help="Name it something fun!!"
        error={nameInput.touched && nameInput.error ? nameInput.error : null}
      >
        <input {...nameInput} type="text" id="name-input" name="name" />
      </FormField>
      <FormField
        label="Type"
        help="What type of event is it?"
        error={typeInput.touched && typeInput.error ? typeInput.error : null}
        htmlFor="type-input"
      >
        <Select
          {...typeInput}
          id="type-input"
          options={eventTypes}
        />
      </FormField>
      <FormField
        label="Host"
        htmlFor="host-input"
        help="Who is hosting this shindig?"
      >
        <SearchInput
          {...hostInput}
          id="host-input"
          name="host"
          suggestions={pastHosts}
          onSelect={({ _, suggestion }) => hostInput.onChange(suggestion)}
        />
      </FormField>
      <FormField
        label="Start Date"
        error={startDateInput.touched && startDateInput.error ? startDateInput.error : null}
        help="When does it start? Set a Date and Time"
      >
        <DateTime
          {...startDateInput}
          id="start-date-field"
          format="MM/DD/YYYY h:mm a"
          step="30"
        />
      </FormField>
      <FormField
        label="End Date"
        error={endDateInput.touched && endDateInput.error ? endDateInput.error : null}
        help="When does it end? Set a Date and Time"
      >
        <DateTime
          {...endDateInput}
          id="end-date-field"
          format="MM/DD/YYYY h:mm a"
          step="30"
        />
      </FormField>
      <FormField
        label="Guests"
        htmlFor="guests-input"
        help="Start Typing to Add A Guest"
        error={guestsInput.touched && guestsInput.error ? guestsInput.error : null}
      >
        <SearchInput
          {...guestsInput}
          id="guests-input"
          name="guests"
          suggestions={pastGuests}
          onSelect={({ _, suggestion }) => guestsInput.onChange(suggestion)}
        />
      </FormField>
    </FormFields>
  </Form>
);

EventForm.propTypes = {

};

export default cssModules(EventForm, styles);
