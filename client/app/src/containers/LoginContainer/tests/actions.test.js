import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('Login actions', () => {
  it('should have a type of LOGIN_SHOW_ERROR', () => {
    const error = 'Error';
    const expected = {
      type: types.LOGIN_SHOW_ERROR,
      error,
    };
    expect(
      actions.loginShowError(error)
    ).toEqual(expected);
  });
  it('should have a type of LOGIN_SHOW_MESSAGE', () => {
    const message = 'Hello!';
    const expected = {
      type: types.LOGIN_SHOW_MESSAGE,
      message,
    };
    expect(
      actions.loginShowMessage(message)
    ).toEqual(expected);
  });
  it('should have a type of LOGIN_CLEAR_ERROR', () => {
    const expected = {
      type: types.LOGIN_CLEAR_ERROR,
    };
    expect(
      actions.loginClearError()
    ).toEqual(expected);
  });
  it('should have a type of LOGIN_CLEAR_MESSAGE', () => {
    const expected = {
      type: types.LOGIN_CLEAR_MESSAGE,
    };
    expect(
      actions.loginClearMessage()
    ).toEqual(expected);
  });
  it('should have a type of LOGIN_SET_LOADING', () => {
    const expected = {
      type: types.LOGIN_SET_LOADING,
    };
    expect(
      actions.loginSetLoading()
    ).toEqual(expected);
  });
});
