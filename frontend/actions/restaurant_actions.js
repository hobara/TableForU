import * as APIUtil from '../util/restaurant_api_util';

export const RECEIVE_ALL_RESTAURANT = 'RECEIVE_ALL_RESTAURANT';
export const RECEIVE_SINGLE_RESTAURANT = 'RECEIVE_SINGLE_RESTAURANT';
export const RECEIVE_DELETE = 'RECEIVE_DELETE';

export const requestAllRestaurant = (cityId) => dispatch => (
  APIUtil.fetchAllRestaurant(cityId)
  .then(restaurants => dispatch(receiveAllRestaurant(restaurants)))
);

export const requestSingleRestaurant = (id) => dispatch => (
  APIUtil.fetchSingleRestaurant(id)
  .then(restaurant => {
    dispatch(receiveSingleRestaurant(restaurant));
    return restaurant;
  })
);

export const createRestaurant = (restaurant) => dispatch => (
  APIUtil.createRestaurant(restaurant)
  .then(newRes => {
    dispatch(receiveSingleRestaurant(newRes));
    return newRes;
  })
);

export const updateRestaurant = (restaurant) => dispatch => (
  APIUtil.updateRestaurant(restaurant)
  .then(newRes => {
    dispatch(receiveSingleRestaurant(newRes));
  })
);

export const deleteRestaurant = (restaurant) => dispatch => (
  APIUtil.deleteRestaurant(restaurant)
  .then(() => dispatch(receiveDelete()))
);



export const receiveAllRestaurant = (restaurants) => ({
  type: RECEIVE_ALL_RESTAURANT,
  restaurants
});

export const receiveSingleRestaurant = (restaurant) => ({
  type: RECEIVE_SINGLE_RESTAURANT,
  restaurant
});

export const receiveDelete = () => ({
  type: RECEIVE_DELETE
});
