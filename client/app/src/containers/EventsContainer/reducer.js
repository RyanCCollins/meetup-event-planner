import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  current: 10,
};

const eventsReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.INCREMENT_CURRENT:
        return update(state, {
          current: {
            $set: state.current + 5,
          },
        });
      default:
        return state;
    }
  };

export default eventsReducer;
