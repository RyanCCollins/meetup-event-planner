import expect from 'expect';
import eventsReducer, { initialState } from '../reducer';

describe('eventsReducer', () => {
  it('returns the initial state', () => {
    expect(
      eventsReducer(undefined, {})
    ).toEqual(initialState);
  });
});
