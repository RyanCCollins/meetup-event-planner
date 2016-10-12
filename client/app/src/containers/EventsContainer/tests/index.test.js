import Events from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState as eventsContainer } from '../reducer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<Events />', () => {
  it('should render with default props', () => {
    const store = mockStore({ eventsContainer });
    const wrapper = shallow(
      <Events store={store} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
