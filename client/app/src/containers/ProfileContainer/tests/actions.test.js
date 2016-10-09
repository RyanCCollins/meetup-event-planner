import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('Profile actions', () => {
  it('should handle PROFILE_EDIT_BIO', () => {
    const bio = 'Hello world';
    const expected = {
      type: types.PROFILE_EDIT_BIO,
      bio,
    };
    expect(
      actions.profileEditBio()
    ).toEqual(expected);
  });
  it('should handle PROFILE_EDIT_AVATAR', () => {
    const avatar = 'https://github.com/avatar.png';
    const expected = {
      type: types.PROFILE_EDIT_AVATAR,
      avatar,
    };
    expect(
      actions.profileEditAvatar()
    ).toEqual(expected);
  });
  it('should handle PROFILE_EDIT_EMAIL', () => {
    const email = 'admin@ryancollins.io';
    const expected = {
      email,
    };
    expect(
      actions.profileEditAvatar()
    ).toEqual(expected);
  });
  it('should handle PROFILE_SUBMISSION_INITIATION', () => {
    
  });
  it('should handle PROFILE_SUBMISSION_SUCCESS', () => {});
  it('should handle PROFILE_SUBMISSION_FAILURE', () => {});
  it('should handle PROFILE_CLEAR_ERROR', () => {});
  it('should handle PROFILE_CANCEL_EDITING', () => {});
  it('should handle PROFILE_START_EDITING', () => {});
});
