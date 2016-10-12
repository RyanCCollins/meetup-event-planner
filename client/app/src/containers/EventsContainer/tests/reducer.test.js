import expect from 'expect';
import * as types from '../constants';
import eventsReducer, { initialState } from '../reducer';

describe('eventsReducer', () => {
  it('returns the initial state', () => {
    expect(
      eventsReducer(undefined, {})
    ).toEqual(initialState);
  });
  it('should handle reducer for INCREMENT_CURRENT', () => {
    const stateBefore = {
      current: 10,
    };
    const stateAfter = {
      current: 15,
    };
    expect(
      eventsReducer(stateBefore, {
        type: types.INCREMENT_CURRENT
      })
    ).toEqual(stateAfter);
  });
});
