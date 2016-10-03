import EventInfo from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<EventInfo />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <EventInfo />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
