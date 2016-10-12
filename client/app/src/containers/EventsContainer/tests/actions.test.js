import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('Events actions', () => {
  it('has a type of INCREMENT_CURRENT', () => {
    const expected = {
      type: types.INCREMENT_CURRENT,
    };
    expect(actions.eventsIncrementCurrent()).toEqual(expected);
  });
});
