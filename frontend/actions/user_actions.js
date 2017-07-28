import * as ApiUtil from '../util/user_api_util';
import * as FavoritesAction from './favorite_actions';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_UPDATE = 'RECEIVE_UPDATE';

export const requestUser = (id) => dispatch => (
  ApiUtil.requestUser(id)
  .then(user => dispatch(receiveUser(user)))
  .then(user => dispatch(FavoritesAction.receiveAllFavorite(user.user.favorites)))
);

export const requestReservation = (id) => dispatch => (
  ApiUtil.requestReservation(id)
  .then(reservation => dispatch(receiveUpdate(reservation)))
);

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

const receiveUpdate = reservation => ({
  type: RECEIVE_UPDATE,
  reservation
});
