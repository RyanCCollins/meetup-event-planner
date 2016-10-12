import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('CreateEvent actions', () => {
  it('has a type of CREATE_EVENT_ERROR', () => {
    const error = 'Error';
    const expected = {
      type: types.CREATE_EVENT_ERROR,
      error,
    };
    expect(actions.createEventError(error)).toEqual(expected);
  });
  it('has a type of CREATE_EVENT_MESSAGE', () => {
    const message = 'Message';
    const expected = {
      type: types.CREATE_EVENT_MESSAGE,
      message,
    };
    expect(actions.createEventMessage(message)).toEqual(expected);
  });
  it('has a type of CLEAR_CREATE_EVENT_ERROR', () => {
    const expected = {
      type: types.CLEAR_CREATE_EVENT_ERROR,
    };
    expect(actions.clearCreateEventError()).toEqual(expected);
  });
  it('has a type of CLEAR_CREATE_EVENT_MESSAGE', () => {
    const expected = {
      type: types.CLEAR_CREATE_EVENT_MESSAGE,
    };
    expect(actions.clearCreateEventMessage()).toEqual(expected);
  });
  it('has a type of CREATE_EVENT_ADD_GUEST', () => {
    const guest = {
      name: 'Ryan',
    };
    const expected = {
      type: types.CREATE_EVENT_ADD_GUEST,
      guest,
    };
    expect(actions.createEventAddGuest(guest)).toEqual(expected);
  });
  it('has a type of CREATE_EVENT_ADD_GUEST', () => {
    const index = 1;
    const expected = {
      type: types.CREATE_EVENT_ADD_GUEST,
      index,
    };
    expect(actions.createEventRemoveGuest(index)).toEqual(expected);
  });
});
