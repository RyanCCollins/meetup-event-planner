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
import Heading from 'grommet-udacity/components/Heading';
import List from 'grommet-udacity/components/List';
import ListItem from 'grommet-udacity/components/ListItem';
import CloseIcon from 'grommet/components/icons/base/Close';
import AddIcon from 'grommet/components/icons/base/Add';

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
}) => (
  <Form onSubmit={onSubmit} className={styles.eventForm}>
    <FormFields>
      <FormField
        label="Name"
        htmlFor="name-input"
        help="Name it something fun!!"
        error={nameInput.touched && nameInput.error ? nameInput.error : null}
      >
        <input {...nameInput} type="text" id="name-input" name="event-name" />
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
          value={{ value: typeInput.value.option, label: typeInput.value.option }}
          options={eventTypes.map(i => `${i.charAt(0)}${i.slice(1)}`)}
          onSelect={({ _, suggestion }) => typeInput.onChange(suggestion.option)}
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
          suggestions={pastHosts.map(i => i.name)}
          onDOMChange={(e) => hostInput.onChange(e.target.value)}
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
        style={{ position: 'relative' }}
        error={guestsInput.touched && guestsInput.error ? guestsInput.error : null}
      >
        <SearchInput
          {...guestsInput}
          id="guests-input"
          name="guests"
          onDOMChange={(e) => guestsInput.onChange(e.target.value)}
          suggestions={pastGuests.map(i => i.name)}
          onSelect={({ _, suggestion }) => onAddGuest(suggestion)}
        />
        {
          guestsInput !== '' &&
            <Button
              tabIndex="0"
              className={styles.addButton}
              icon={<AddIcon />}
              onClick={() => {
                onAddGuest(guestsInput.value);
                guestsInput.onChange('');
              }}
            />
        }
      </FormField>
      <FormField
        className={guestList && guestList.length < 0 ? styles.hidden : styles.none}
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
        error={messageInput.touched && messageInput.error ? messageInput.error : null}
      >
        <textarea {...messageInput} name="message" id="message-input" cols="40" rows="3" />
      </FormField>
    </FormFields>
    <Footer justify="center" pad={{ vertical: 'small' }}>
      <Button label="Submit" onClick={onSubmit} />
    </Footer>
  </Form>
);

EventForm.propTypes = {
  onAddGuest: PropTypes.func.isRequired,
  onRemoveGuest: PropTypes.func.isRequired,
};

export default cssModules(EventForm, styles);
