import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Form from 'grommet-udacity/components/Form';
import FormFields from 'grommet-udacity/components/FormFields';
import FormField from 'grommet-udacity/components/FormField';
import DateTime from 'grommet-udacity/components/DateTime';
import SearchInput from 'grommet-udacity/components/SearchInput';
import Select from 'grommet-udacity/components/Select';
import Footer from 'grommet-udacity/components/Footer';
import Button from 'grommet-udacity/components/Button';
import Box from 'grommet-udacity/components/Box';
import Geosuggest from 'react-geosuggest';
import List from 'grommet-udacity/components/List';
import ListItem from 'grommet-udacity/components/ListItem';
import CloseIcon from 'grommet-udacity/components/icons/base/Close';
import AddIcon from 'grommet-udacity/components/icons/base/Add';
import uniq from 'lodash/uniq';
import calculatedError from './utils/error';

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
  guestList,
  onAddGuest,
  onRemoveGuest,
  invalid,
}) => (
  <Form onSubmit={onSubmit} className={styles.eventForm}>
    <FormFields>
      <FormField
        label="Name *"
        htmlFor="name-input"
        help="Name it something fun!!"
        error={nameInput.dirty || nameInput.touched && nameInput.error ? nameInput.error : null}
      >
        <input
          {...nameInput}
          required
          autoFocus
          type="text"
          id="name-input"
          name="event-name"
        />
      </FormField>
      <FormField
        label="Type *"
        help="What type of event is it?"
        error={!typeInput.valid && typeInput.error ? typeInput.error : null}
        htmlFor="type-input"
      >
        <Select
          {...typeInput}
          required
          id="type-input"
          value={{ value: typeInput.value.option, label: typeInput.value.option }}
          options={eventTypes.map(i => `${i.charAt(0).toUpperCase()}${i.slice(1)}`)}
          onSelect={({ suggestion }) => typeInput.onChange(suggestion.option)}
        />
      </FormField>
      <FormField
        label="Host *"
        htmlFor="host-input"
        help="Who is hosting this shindig?"
        error={calculatedError(hostInput)}
      >
        <SearchInput
          {...hostInput}
          required
          id="host-input"
          name="host"
          required
          suggestions={uniq(pastHosts.map(i => i.name))}
          onDOMChange={(e) => hostInput.onChange(e.target.value)}
          onSelect={({ suggestion }) => hostInput.onChange(suggestion)}
        />
      </FormField>
      <FormField
        error={calculatedError(locationInput)}
        label="Location *"
        className={styles.locationInput}
        htmlFor="location-input"
      >
        <Geosuggest
          required
          id="location-input"
          placeholder="Start typing!"
          {...locationInput}
        />
      </FormField>
      <FormField
        label="Start Date *"
        htmlFor="start-date-input"
        error={calculatedError(startDateInput)}
        help="When does it start? Set a Date and Time"
      >
        <DateTime
          {...startDateInput}
          required
          id="start-date-input"
          format="MM/DD/YYYY h:mm a"
          step="30"
        />
      </FormField>
      <FormField
        label="End Date *"
        htmlFor="end-date-input"
        error={calculatedError(endDateInput)}
        help="When does it end? Set a Date and Time"
      >
        <DateTime
          {...endDateInput}
          required
          id="end-date-input"
          format="MM/DD/YYYY h:mm a"
          step="30"
        />
      </FormField>
      <FormField
        label="Guests *"
        htmlFor="guests-input"
        help="Start Typing to Add A Guest"
        style={{ position: 'relative' }}
        error={guestList.length < 1 ? guestsInput.error : null}
      >
        <SearchInput
          {...guestsInput}
          required
          id="guests-input"
          name="guests"
          onDOMChange={(e) => guestsInput.onChange(e.target.value)}
          suggestions={uniq(pastGuests.map(i => i.name))}
          onSelect={({ suggestion }) => {
            guestsInput.onChange(suggestion);
            onAddGuest(suggestion);
            guestsInput.onChange('');
          }}
        />
        {guestsInput.valid &&
          <Button
            tabIndex="0"
            className={styles.addButton}
            icon={<AddIcon />}
            onClick={() => {
              if (guestsInput.value !== null || guestsInput.value !== '') {
                onAddGuest(guestsInput.value);
                guestsInput.onChange('');
              }
            }}
          />
        }
      </FormField>
      <FormField
        label={guestList && guestList.length > 0 ? 'Guest List' : ''}
        className={styles.guestListField}
      >
        {guestList && guestList.length > 0 &&
          <Box style={{ zIndex: 10 }}>
            <List>
              {guestList.map((item, i) =>
                <ListItem key={i}>
                  <Box
                    style={{ width: '100%' }}
                    responsive={false}
                    justify="around"
                    align="start"
                    direction="row"
                  >
                    <span
                      style={{ flex: 1, height: 30, marginTop: 18 }}
                    >
                      {item}
                    </span>
                    <Button onClick={() => onRemoveGuest(i)} icon={<CloseIcon />} />
                  </Box>
                </ListItem>
              )}
            </List>
          </Box>
        }
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
};

export default cssModules(EventForm, styles);
