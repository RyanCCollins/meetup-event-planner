import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('Events actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: types.EVENTS_DEFAULT_ACTION,
      };
      expect(actions.eventsDefaultAction()).toEqual(expected);
    });
  });
});
