import SignupForm from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import { fields } from './mocks';

describe('<SignupForm />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <SignupForm
        {...fields}
        onSubmit={(e) => e}
        isShowingPasswordTips={(e) => e}
        onPasswordFocus={(e) => e}
        onPasswordBlur={(e) => e}
        onInvalidateTip={(e) => e}
        invalid
        isShowingPasswordTips
        tipIsValid
      />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
