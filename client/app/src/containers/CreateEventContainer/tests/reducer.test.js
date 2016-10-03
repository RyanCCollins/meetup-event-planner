import expect from 'expect';
import createEventReducer, { initialState } from '../reducer';

describe('createEventReducer', () => {
  it('returns the initial state', () => {
    expect(
      createEventReducer(undefined, {})
    ).toEqual(initialState);
  });
});
