import EventForm from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import {
  fields,
  mockFn,
  pastGuests,
  guestList,
  pastHosts,
  eventTypes,
} from './mock';

describe('<EventForm />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <EventForm
        {...fields}
        invalid={false}
        onAddGuest={mockFn}
        onRemoveGuest={mockFn}
        guestList={guestList}
        eventTypes={eventTypes}
        pastHosts={pastHosts}
        pastGuests={pastGuests}
        onSubmit={mockFn}
      />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
