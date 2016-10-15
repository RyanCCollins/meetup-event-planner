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

export const onSetGuests = (guests) => ({
  type: types.CREATE_EVENT_ADD_GUESTS,
  guests,
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

export const setStartDateFocus = () => ({
  type: types.CREATE_EVENT_SET_START_DATE_FOCUS,
});

export const setEndDateFocus = () => ({
  type: types.CREATE_EVENT_SET_END_DATE_FOCUS,
});

export const setEventHost = (host) => ({
  type: types.SET_EVENT_HOST,
  host,
});
