import SingleEvent from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<SingleEvent />', () => {
  it('should render with default props', () => {
    const event = {
      id: 4,
      name: 'Pool Party',
      end: '2014-12-12 00:00:00 UTC',
      start: '2016-11-02 00:00:00 UTC',
      type: 'birthday',
      location: '1204 North Carolina 55, Fuquay Varina, NC, United States',
      message: 'The best party',
      host: { name: 'Joaquin West' },
      guests: [{ name: 'Bilbo Baggins' }],
    };
    const user = {
      id: '1',
      bio: 'Experienced Software Engineer specializing in implementing cutting-edge technologies in a multitude of domains, focusing on Front End Web Development and UI / UX.',
      email: 'ryan@udacity.com',
      name: 'Ryan Collins',
      avatar: 'https://github.com/RyanCCollins/cdn/blob/master/misc/ryanc.jpg?raw=true',
      employer: 'Udacity',
      authToken: 'hzqmg5KWxJK7--4iWQYq',
      events: [{ name: 'Alumni App Release Party', id: '1' }]
    };
    const wrapper = shallow(
      <SingleEvent onRsvp={e => e} user={user} event={event} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
