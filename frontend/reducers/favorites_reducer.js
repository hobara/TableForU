import { merge } from 'lodash';
import { RECEIVE_SINGLE_FAVORITE, REMOVE_FAVORITE, RECEIVE_ALL_FAVORITE } from '../actions/favorite_actions';

const _nullFavorites = {};

const faves = (favorites) => {
  let favs = {};
  favorites.forEach(fav => {
    favs[fav.restaurant_id] = fav;
  });
  return favs;
};

const fave = (favorite) => {
  const id = favorite.restaurant_id;
  return {[id]: favorite};
};

const FavoritesReducer = (state = _nullFavorites, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_FAVORITE:
      const favorites = faves(action.favorites);
      return favorites;
    case RECEIVE_SINGLE_FAVORITE:
    const favorite = fave(action.favorite);
      return merge({}, state, favorite);
    case REMOVE_FAVORITE:
      let newState = merge({}, state);
      delete newState[action.favorite.restaurant_id];
      return newState;
    default:
      return state;
  }
};

export default FavoritesReducer;
