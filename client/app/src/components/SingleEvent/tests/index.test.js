import SingleEvent from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<SingleEvent />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <SingleEvent />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
