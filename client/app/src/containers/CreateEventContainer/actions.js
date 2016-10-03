import * as types from './constants';

// createEventError :: String -> {Action}
export const createEventError = (error) => ({
  type: types.CREATE_EVENT_ERROR,
  error,
});

// createEventMessage :: String -> {Action}
export const createEventMessage = (message) => ({
  type: types.CREATE_EVENT_MESSAGE,
  message,
});

// clearCreateEventError :: None -> {Action}
export const clearCreateEventError = () => ({
  type: types.CLEAR_CREATE_EVENT_ERROR,
});

// clearCreateEventMessage :: None -> {Action}
export const clearCreateEventMessage = () => ({
  type: types.CLEAR_CREATE_EVENT_MESSAGE,
});

export const clearCreateEventToast = (type) =>
  (dispatch) => {
    switch (type) {
      case 'error':
        dispatch(
          clearCreateEventError()
        );
        break;
      case 'message':
        dispatch(
          clearCreateEventMessage()
        );
        break;
      default:
        break;
    }
  };

// createEventAddGuest :: String -> {Action}
export const createEventAddGuest = (guest) => ({
  type: types.CREATE_EVENT_ADD_GUEST,
  guest,
});

// createEventRemoveGuest :: Int -> {Action}
export const createEventRemoveGuest = (index) => ({
  type: types.CREATE_EVENT_REMOVE_GUEST,
  index,
});
