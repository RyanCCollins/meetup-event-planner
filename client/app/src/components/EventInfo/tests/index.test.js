import EventInfo from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<EventInfo />', () => {
  it('should render with default props', () => {
    const event = {
      id: '4',
      name: 'Pool Party',
      end: '2014-12-12 00:00:00 UTC',
      start: '2016-11-02 00:00:00 UTC',
      type: 'birthday',
      location: '1204 North Carolina 55, Fuquay Varina, NC, United States',
      message: 'The best party',
      host: { name: 'Joaquin West' },
      guests: [{ name: 'Bilbo Baggins' }],
    };
    const wrapper = shallow(
      <EventInfo event={event} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
