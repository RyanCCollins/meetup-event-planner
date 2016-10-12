import CreateEvent from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState as createEventContainer } from '../reducer';
import Section from 'grommet-udacity/components/Section';
import Heading from 'grommet-udacity/components/Heading';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<CreateEvent />', () => {
  it('should render with default props', () => {
    const store = mockStore({ createEventContainer });
    const wrapper = shallow(
      <CreateEvent store={store} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it('should have expected dom components', () => {
    const store = mockStore({ createEventContainer });
    const wrapper = shallow(
      <CreateEvent store={store} />
    );
    expect(
      wrapper.find(
        <Section />
      )
    ).toExist();
    expect(
      wrapper.find(
        <Heading />
      )
    ).toExist();
  });
});
