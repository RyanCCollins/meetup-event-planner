import EventForm from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<EventForm />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <EventForm />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
