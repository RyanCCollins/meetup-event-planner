import expect from 'expect';
import profileReducer, { initialState } from '../reducer';

describe('profileReducer', () => {
  it('returns the initial state', () => {
    expect(
      profileReducer(undefined, {})
    ).toEqual(initialState);
  });
});
