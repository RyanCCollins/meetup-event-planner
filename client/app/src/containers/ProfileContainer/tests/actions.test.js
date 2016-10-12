import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('Profile actions', () => {
  it('should handle PROFILE_START_EDITING', () => {
    const expected = {
      type: types.PROFILE_START_EDITING,
    };
    expect(
      actions.profileStartEditing()
    ).toEqual(expected);
  });
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
      type: types.PROFILE_EDIT_EMAIL,
      email,
    };
    expect(
      actions.profileEditAvatar()
    ).toEqual(expected);
  });
  it('should handle PROFILE_SUBMISSION_INITIATION', () => {
    const expected = {
      type: types.PROFILE_SUBMISSION_INITIATION,
    };
    expect(
      actions.profileSubmissionInitiation()
    ).toEqual(expected);
  });
  it('should handle PROFILE_SUBMISSION_SUCCESS', () => {
    const expected = {
      type: types.PROFILE_SUBMISSION_SUCCESS,
    };
    expect(
      actions.profileSubmissionSuccess()
    ).toEqual(expected);
  });
  it('should handle PROFILE_SUBMISSION_FAILURE', () => {
    const error = 'Error';
    const expected = {
      type: types.PROFILE_SUBMISSION_FAILURE,
      error,
    };
    expect(
      actions.profileSubmissionFailure(error)
    ).toEqual(expected);
  });
  it('should handle PROFILE_CLEAR_ERROR', () => {
    const expected = {
      type: types.PROFILE_CLEAR_ERROR,
    };
    expect(
      actions.profileClearError()
    ).toEqual(expected);
  });
  it('should handle PROFILE_CANCEL_EDITING', () => {
    const expected = {
      type: types.PROFILE_CANCEL_EDITING,
    };
    expect(
      actions.profileCancelEditing()
    ).toEqual(expected);
  });
  it('should handle PROFILE_EDIT_EMPLOYER', () => {
    const employer = 'Dave';
    const expected = {
      type: types.PROFILE_EDIT_EMPLOYER,
      employer,
    };
    expect(
      actions.profileEditEmployer(employer)
    ).toEqual(expected);
  });
});
