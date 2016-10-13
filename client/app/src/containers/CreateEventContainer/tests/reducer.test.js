import expect from 'expect';
import * as types from '../constants';
import createEventReducer, { initialState } from '../reducer';

describe('createEventReducer', () => {
  it('returns the initial state', () => {
    expect(
      createEventReducer(undefined, {})
    ).toEqual(initialState);
  });
  it('should handle reducer for CREATE_EVENT_ERROR', () => {
    const error = 'Error';
    const stateBefore = {
      error: null,
    };
    const stateAfter = {
      error,
    };
    expect(
      createEventReducer(stateBefore, {
        type: types.CREATE_EVENT_ERROR,
        error,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for CREATE_EVENT_MESSAGE', () => {
    const message = 'Hi there';
    const stateBefore = {
      message: null,
    };
    const stateAfter = {
      message,
    };
    expect(
      createEventReducer(stateBefore, {
        type: types.CREATE_EVENT_MESSAGE,
        message,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for CLEAR_CREATE_EVENT_ERROR', () => {
    const error = 'Error';
    const stateBefore = {
      error,
    };
    const stateAfter = {
      error: null,
    };
    expect(
      createEventReducer(stateBefore, {
        type: types.CLEAR_CREATE_EVENT_ERROR,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for CLEAR_CREATE_EVENT_MESSAGE', () => {
    const message = 'Hi there';
    const stateBefore = {
      message,
    };
    const stateAfter = {
      message: null,
    };
    expect(
      createEventReducer(stateBefore, {
        type: types.CLEAR_CREATE_EVENT_MESSAGE,
      })
    ).toEqual(stateAfter);
  });
});
