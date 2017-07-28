import * as APIUtil from '../util/reservation_api_util';

export const RECEIVE_ALL_RESERVATION = 'RECEIVE_ALL_RESERVATION';
export const RECEIVE_SINGLE_RESERVATION = 'RECEIVE_SINGLE_RESERVATION';
export const RECEIVE_DELETE = 'RECEIVE_DELETE';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const CLEAR_RESERVATION = 'CLEAR_RESERVATION';
export const DESTROY_RESERVATION = 'DESTROY_RESERVATION';


export const requestAllReservation = () => dispatch => (
  APIUtil.fetchAllReservation()
    .then(reservations => dispatch(receiveAllReservation(reservations)))
);

export const requestSingleReservation = (id) => dispatch => (
  APIUtil.fetchSingleReservation(id)
  .then(reservation => {
    dispatch(receiveSingleReservation(reservation));
    return reservation;
  })
);

export const createReservation = (reservation) => dispatch => (
  APIUtil.createReservation(reservation)
    .then((newReservation) => {
      dispatch(receiveSingleReservation(newReservation.id));
      dispatch(clearErrors());
    }, err => (dispatch(receiveErrors(err.responseJSON))))
);

export const deleteReservation = (id) => dispatch => (
  APIUtil.deleteReservation(id)
    .then(() => dispatch(receiveDelete()))
);

export const resetReservation = () => dispatch => (
  dispatch(clearReservation({}))
);

const receiveAllReservation = (reservations) => ({
  type: RECEIVE_ALL_RESERVATION,
  reservations
});

const receiveSingleReservation = (reservation) => ({
  type: RECEIVE_SINGLE_RESERVATION,
  reservation,
});

const clearReservation = (reservation) => ({
  type: CLEAR_RESERVATION,
  reservation,
});

export const receiveDelete = () => ({
  type: RECEIVE_DELETE
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});
