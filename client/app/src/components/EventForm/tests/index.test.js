import EventForm from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import {
  fields,
  mockFn,
  pastGuests,
  guestsList,
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
        guestList={guestsList}
        eventTypes={eventTypes}
        pastHosts={pastHosts}
        pastGuests={pastGuests}
        onSubmit={this.handleSubmit}
      />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
