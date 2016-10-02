import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('Landing actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: types.LANDING_DEFAULT_ACTION,
      };
      expect(actions.landingDefaultAction()).toEqual(expected);
    });
  });
});
