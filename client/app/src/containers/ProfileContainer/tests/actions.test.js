import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('Profile actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: types.PROFILE_DEFAULT_ACTION,
      };
      expect(actions.profileDefaultAction()).toEqual(expected);
    });
  });
});
