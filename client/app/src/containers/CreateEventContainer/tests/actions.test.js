import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('CreateEvent actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: types.CREATEEVENT_DEFAULT_ACTION,
      };
      expect(actions.createEventDefaultAction()).toEqual(expected);
    });
  });
});
