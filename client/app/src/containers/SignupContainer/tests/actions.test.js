import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('Signup actions', () => {
  it('should handle SIGNUP_SHOW_ERROR', () => {
    const error = 'An error has occured';
    const expected = {
      type: types.SIGNUP_SHOW_ERROR,
      error,
    };
    expect(actions.signupShowError(error)).toEqual(expected);
  });
  it('should handle SIGNUP_SHOW_MESSAGE', () => {
    const message = 'An error has not occured';
    const expected = {
      type: types.SIGNUP_SHOW_MESSAGE,
      message,
    };
    expect(actions.signupShowMessage(message)).toEqual(expected);
  });
  it('should handle SIGNUP_CLEAR_ERROR', () => {
    const expected = {
      type: types.SIGNUP_CLEAR_ERROR,
    };
    expect(actions.signupClearError()).toEqual(expected);
  });
  it('should handle SIGNUP_CLEAR_MESSAGE', () => {
    const expected = {
      type: types.SIGNUP_CLEAR_MESSAGE,
    };
    expect(actions.signupClearMessage()).toEqual(expected);
  });
  it('should handle SIGNUP_SET_LOADING', () => {
    const expected = {
      type: types.SIGNUP_SET_LOADING,
    };
    expect(actions.signupSetLoading()).toEqual(expected);
  });
  it('should handle TOGGLE_SIGNUP_TIPS', () => {
    const isShowing = true;
    const expected = {
      type: types.TOGGLE_SIGNUP_TIPS,
      isShowing,
    };
    expect(
      actions.toggleSignupTips(isShowing)
    ).toEqual(expected);
  });
});
