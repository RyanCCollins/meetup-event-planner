import UserProfile from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import { user, mockFn } from './mocks';

describe('<UserProfile />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <UserProfile
        user={user}
        onEditBio={mockFn}
        onCancel={mockFn}
        onSaveEdit={mockFn}
        onClickToEdit={mockFn}
        onEditEmail={mockFn}
        onEditAvatar={mockFn}
        onEditEmail={mockFn}
        onEditEmployer={mockFn}
        isEditing={false}
        bioInput={''}
        avatarInput={''}
        emailInput={''}
        employerInput={''}
      />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
