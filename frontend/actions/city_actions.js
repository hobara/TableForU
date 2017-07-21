import * as APIUtil from '../util/city_api_util';

export const RECEIVE_ALL_CITY = 'RECEIVE_ALL_CITY';
export const RECEIVE_SINGLE_CITY = 'RECEIVE_SINGLE_CITY';

export const requestAllCity = () => dispatch => (
  APIUtil.fetchAllCity()
  .then(city => dispatch(receiveAllCity(city)))
);

export const requestSingleCity = (id) => dispatch => (
  APIUtil.fetchSingleCity(id)
  .then(city => {
    dispatch(receiveSingleCity(city));
    return city;
  })
);

export const createCity = (city) => dispatch => (
  APIUtil.createCity(city)
  .then(city1 => {
    dispatch(receiveSingleCity(city1));
    return city1;
  })
);

export const receiveAllCity = (city) => ({
  type: RECEIVE_ALL_CITY,
  city
});

export const receiveSingleCity = (payload) => ({
  type: RECEIVE_SINGLE_CITY,
  payload
});
