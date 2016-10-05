import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  isEditingBio: false,
  bioInput: null,
  error: null,
  isLoading: false,
  isEditingAvatar: false,
  avatarInput: null,
};

const profileReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.PROFILE_EDIT_AVATAR:
        return update(state, {
          avatarInput: {
            $set: action.avatar,
          },
        });
      case types.PROFILE_EDIT_BIO:
        return update(state, {
          bioInput: {
            $set: action.bio,
          },
        });
      case types.PROFILE_SUBMISSION_INITIATION:
        return update(state, {
          isLoading: {
            $set: true,
          },
        });
      case types.PROFILE_SUBMISSION_SUCCESS:
        return update(state, {
          isEditingBio: {
            $set: false,
          },
          bioInput: {
            $set: null,
          },
          avatarInput: {
            $set: null,
          },
          isEditingAvatar: {
            $set: false,
          },
          isLoading: {
            $set: false,
          },
        });
      case types.PROFILE_SUBMISSION_FAILURE:
        return update(state, {
          isEditingBio: {
            $set: false,
          },
          bioInput: {
            $set: null,
          },
          avatarInput: {
            $set: null,
          },
          isEditingAvatar: {
            $set: false,
          },
          isLoading: {
            $set: false,
          },
          error: {
            $set: action.error,
          },
        });
      case types.PROFILE_CLEAR_ERROR:
        return update(state, {
          error: {
            $set: null,
          },
        });
      case types.PROFILE_CANCEL_EDITING:
        return update(state, {
          isEditingBio: {
            $set: false,
          },
          bioInput: {
            $set: null,
          },
          isEditingAvatar: {
            $set: false,
          },
          avatarInput: {
            $set: null,
          },
        });
      case types.PROFILE_START_EDITING:
        return update(state, {
          isEditingBio: {
            $set: true,
          },
          isEditingAvatar: {
            $set: true,
          },
        });
      default:
        return state;
    }
  };

export default profileReducer;
