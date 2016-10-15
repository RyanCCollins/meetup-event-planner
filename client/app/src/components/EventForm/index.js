import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Form from 'grommet-udacity/components/Form';
import FormFields from 'grommet-udacity/components/FormFields';
import FormField from 'grommet-udacity/components/FormField';
import DateTime from 'grommet-udacity/components/DateTime';
import Footer from 'grommet-udacity/components/Footer';
import Button from 'grommet-udacity/components/Button';
import Select, { Creatable } from 'react-select';
import Geosuggest from 'react-geosuggest';

import uniq from 'lodash/uniq';
import calculatedError, { valueRequired, atLeastOne, dateError } from './utils/error';

const EventForm = ({
  onSubmit,
  nameInput,
  typeInput,
  hostInput,
  locationInput,
  messageInput,
  guestsInput,
  startDateInput,
  endDateInput,
  pastGuests,
  pastHosts,
  eventTypes,
  invalid,
  onAddGuest,
  guestList,
  onFocusDateTime,
  startDateFocused,
  endDateFocused,
  onAddHost,
  host,
}) => (
  <Form onSubmit={onSubmit} className={styles.eventForm}>
    <FormFields>
      <FormField
        label="Name *"
        htmlFor="name-input"
        help="Set a name for the event."
        error={calculatedError(nameInput)}
      >
        <input
          {...nameInput}
          required
          autoFocus
          type="text"
          id="name-input"
          placeholder="Bill's Birthday"
          name="event-name"
        />
      </FormField>
      <FormField
        label="Type *"
        help="What type of event is it? Select a value from the list."
        error={calculatedError(typeInput)}
        htmlFor="type-input"
      >
        <Select
          {...typeInput}
          required
          id="type-input"
          onBlur={() => typeInput.onBlur(typeInput.value)}
          onChange={(option) => {
            if (option && option.value) {
              typeInput.onChange(option.value);
            } else {
              typeInput.onChange(null);
            }
          }}
          options={eventTypes.map(i =>
            ({
              value: `${i.charAt(0).toUpperCase()}${i.slice(1)}`,
              label: `${i.charAt(0).toUpperCase()}${i.slice(1)}`,
            }))
          }
        />
      </FormField>
      <FormField
        label="Host *"
        htmlFor="host-input"
        help="Select host from list, or start typing to add new host."
        error={calculatedError(hostInput)}
      >
        <Creatable
          {...hostInput}
          required
          id="host-input"
          name="host"
          required
          value={{ label: hostInput.value, value: hostInput.value }}
          onBlur={() => hostInput.onBlur(hostInput.value)}
          onChange={(option) => {
            if (option && option.value) {
              hostInput.onChange(option.value);
              onAddHost(option.value);
            } else {
              hostInput.onChange(null);
            }
          }}
          options={uniq(
            pastHosts.map((hostVal) =>
              ({
                value: hostVal.name,
                label: hostVal.name,
              })
            )
          )}
        />
      </FormField>
      <FormField
        error={calculatedError(locationInput)}
        label="Location *"
        help="Start typing to find the event location"
        className={styles.locationInput}
        htmlFor="location-input"
      >
        <Geosuggest
          required
          id="location-input"
          placeholder="123 Main St, NY, New York 12345"
          onSuggestSelect={(suggest) => locationInput.onChange(suggest)}
          {...locationInput}
        />
      </FormField>
      <FormField
        label="Start Date *"
        htmlFor="start-date-input"
        error={dateError(startDateInput, startDateFocused)}
        help="When does it start? Set a Date and Time."
      >
        <DateTime
          {...startDateInput}
          required
          id="start-date-input"
          onFocus={() => onFocusDateTime('end')}
          onChange={(value) => startDateInput.onChange(value)}
          onBlur={(value) => startDateInput.onBlur(value)}
          format="MM/DD/YYYY h:mm a"
          step="30"
        />
      </FormField>
      <FormField
        label="End Date *"
        htmlFor="end-date-input"
        onFocus={() => onFocusDateTime('end')}
        error={dateError(endDateInput, endDateFocused)}
        help="When does it end? Set a Date and Time."
      >
        <DateTime
          {...endDateInput}
          required
          id="end-date-input"
          onChange={(value) => endDateInput.onChange(value)}
          onBlur={(value) => endDateInput.onBlur(value)}
          format="MM/DD/YYYY h:mm a"
          step="30"
        />
      </FormField>
      <FormField
        label="Guests *"
        htmlFor="guests-input"
        help="Add a new guest, or select past guests."
        style={{ position: 'relative' }}
        error={calculatedError(guestsInput) || atLeastOne(guestList, guestsInput)}
      >
        <Creatable
          {...guestsInput}
          required
          id="guests-input"
          name="guests"
          multi
          onBlur={() => guestsInput.onBlur(guestsInput.value)}
          value={guestList}
          onChange={(guests) => {
            onAddGuest(
              guests.map((guest) =>
                ({
                  ...guest,
                  name: guest.value,
                })
              )
            );
          }}
          options={uniq(
            pastGuests.map((guest) =>
            ({
              value: guest.name,
              label: guest.name,
            })
          )
        )}
        />
      </FormField>
      <FormField
        label="Message"
        help="Optional message to the guests."
        htmlFor="message-input"
        error={calculatedError(messageInput)}
      >
        <textarea
          {...messageInput}
          name="message"
          placeholder="BYOB, bring a swimming suit, no wives allowed"
          id="message-input"
          cols="40"
          rows="3"
        />
      </FormField>
    </FormFields>
    <Footer justify="center" pad={{ vertical: 'small' }}>
      <Button label="Submit" onClick={invalid ? null : onSubmit} />
    </Footer>
  </Form>
);

EventForm.propTypes = {
  onAddGuest: PropTypes.func.isRequired,
  onRemoveGuest: PropTypes.func.isRequired,
  nameInput: PropTypes.object.isRequired,
  typeInput: PropTypes.object.isRequired,
  hostInput: PropTypes.object.isRequired,
  locationInput: PropTypes.object.isRequired,
  messageInput: PropTypes.object.isRequired,
  guestsInput: PropTypes.object.isRequired,
  startDateInput: PropTypes.object.isRequired,
  endDateInput: PropTypes.object.isRequired,
  pastGuests: PropTypes.array.isRequired,
  pastHosts: PropTypes.array.isRequired,
  eventTypes: PropTypes.array.isRequired,
  guestList: PropTypes.array,
  invalid: PropTypes.bool.isRequired,
  onFocusDateTime: PropTypes.func.isRequired,
  startDateFocused: PropTypes.bool.isRequired,
  endDateFocused: PropTypes.bool.isRequired,
};

export default cssModules(EventForm, styles);
