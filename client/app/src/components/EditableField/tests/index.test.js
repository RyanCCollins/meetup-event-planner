import EditableField from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<EditableField />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <EditableField
        isEditing={false}
        onClickToEdit={e => e}
        placeholder="Hello World"
        onEdit={e => e}
        value={"hello world"}
        name="bio"
      >
        <div>
          Hi
        </div>
      </EditableField>
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
