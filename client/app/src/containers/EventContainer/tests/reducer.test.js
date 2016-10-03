import expect from 'expect';
import eventReducer, { initialState } from '../reducer';

describe('eventReducer', () => {
  it('returns the initial state', () => {
    expect(
      eventReducer(undefined, {})
    ).toEqual(initialState);
  });
});
