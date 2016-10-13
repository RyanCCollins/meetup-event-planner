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

export const fieldsToData = (fields, guestList, user) => ({
  authToken: user.authToken,
  event: {
    name: fields.nameInput.value,
    message: fields.messageInput.value,
    start_date: fields.startDateInput.value,
    end_date: fields.endDateInput.value,
    location: fields.locationInput.value,
    type: fields.typeInput.value.option,
    host: {
      name: fields.hostInput.value,
    },
    guests: guestList.map((item) => ({ name: item })),
  },
});
