import * as types from './constants';

export const profileStartEditing = () => ({
  type: types.PROFILE_START_EDITING,
});

export const profileEditBio = (bio) => ({
  type: types.PROFILE_EDIT_BIO,
  bio,
});

export const profileSubmissionInitiation = () => ({
  type: types.PROFILE_SUBMISSION_INITIATION,
});

export const profileSubmissionSuccess = () => ({
  type: types.PROFILE_SUBMISSION_SUCCESS,
});

export const profileSubmissionFailure = (error) => ({
  type: types.PROFILE_SUBMISSION_FAILURE,
  error,
});

export const profileClearError = () => ({
  type: types.PROFILE_CLEAR_ERROR,
});

export const profileCancelEditing = () => ({
  type: types.PROFILE_CANCEL_EDITING,
});

export const profileEditAvatar = (avatar) => ({
  type: types.PROFILE_EDIT_AVATAR,
  avatar,
});
