import expect from 'expect';
import * as types from '../constants';
import signupReducer, { initialState } from '../reducer';
export const SIGNUP_SHOW_ERROR = 'SIGNUP_SHOW_ERROR';
export const SIGNUP_SHOW_MESSAGE = 'SIGNUP_SHOW_MESSAGE';
export const SIGNUP_CLEAR_ERROR = 'SIGNUP_CLEAR_ERROR';
export const SIGNUP_CLEAR_MESSAGE = 'SIGNUP_CLEAR_MESSAGE';
export const SIGNUP_SET_LOADING = 'SIGNUP_SET_LOADING';

describe('signupReducer', () => {
  it('returns the initial state', () => {
    expect(
      signupReducer(undefined, {})
    ).toEqual(initialState);
  });
  it('should handle reducer for SIGNUP_SHOW_ERROR', () => {
    const error = 'An error has occured';
    const stateBefore = {
      error: null,
    };
    const stateAfter = {
      error,
    };
    expect(
      signupReducer(stateBefore, {
        type: types.SIGNUP_SHOW_ERROR,
        error,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for SIGNUP_SHOW_MESSAGE', () => {
    const message = 'A message has occured';
    const stateBefore = {
      message: null,
    };
    const stateAfter = {
      message,
    };
    expect(
      signupReducer(stateBefore, {
        type: types.SIGNUP_SHOW_MESSAGE,
        message,
      })
    ).toEqual(stateAfter);
  });
});
