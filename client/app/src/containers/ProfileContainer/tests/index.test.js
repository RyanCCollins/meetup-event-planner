import Profile from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState as profileContainer } from '../reducer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<Profile />', () => {
  it('should render with default props', () => {
    const store = mockStore({ profileContainer });
    const wrapper = shallow(
      <Profile store={store} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
