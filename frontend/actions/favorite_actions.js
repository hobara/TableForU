import * as APIUtil from '../util/favorite_api_util';

export const RECEIVE_ALL_FAVORITE = 'RECEIVE_ALL_FAVORITE';
export const RECEIVE_SINGLE_FAVORITE = 'RECEIVE_SINGLE_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export const requestAllFavorite = (favorites) => dispatch => (
  dispatch(receiveAllFavorite(favorites))
);

export const addFavorite = (favorite) => dispatch => (
  APIUtil.createFavorite(favorite)
  .then(favorite1 => dispatch(receiveSingleFavorite(favorite1)))
);

export const removeFavorite = (favorite) => dispatch => (
  APIUtil.deleteFavorite(favorite)
  .then(dispatch(receiveRemoveFavorite(favorite)))
);

const receiveAllFavorite = () => ({
  type: RECEIVE_ALL_FAVORITE,
});

const receiveSingleFavorite = favorite => ({
  type: RECEIVE_SINGLE_FAVORITE,
  favorite
});

const receiveRemoveFavorite = favorite => ({
  type: REMOVE_FAVORITE,
  favorite
});
