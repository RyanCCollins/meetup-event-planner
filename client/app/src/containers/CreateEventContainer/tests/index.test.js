import CreateEvent from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState as createEventContainer } from '../reducer';
import { initialState as authReducer } from '../../../components/App/reducer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<CreateEvent />', () => {
  it('should render with default props', () => {
    const store = mockStore({ createEventContainer, authReducer });
    const wrapper = shallow(
      <CreateEvent store={store} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
