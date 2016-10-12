import EditableField from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<EditableField />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <EditableField />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
