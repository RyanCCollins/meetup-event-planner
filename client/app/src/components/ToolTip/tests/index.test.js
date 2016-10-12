import ToolTip from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<ToolTip />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <ToolTip
        isShowing
        onClose={e => e}
      >
        <div>
          <ul>
            <li>
              Hello
            </li>
            <li>
              Hello Again
            </li>
          </ul>
        </div>
      </ToolTip>
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
