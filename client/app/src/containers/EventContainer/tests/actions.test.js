import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('Event actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: types.EVENT_DEFAULT_ACTION,
      };
      expect(actions.eventDefaultAction()).toEqual(expected);
    });
  });
});
