import * as APIUtil from '../util/review_api_util';

export const RECEIVE_ALL_REVIEW = 'RECEIVE_ALL_REVIEW';
export const RECEIVE_SINGLE_REVIEW = 'RECEIVE_SINGLE_REVIEW';
export const RECEIVE_DELETE = 'RECEIVE_DELETE';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const requestAllReview = (restaurant_id) => dispatch => (
  APIUtil.fetchAllReview(restaurant_id)
  .then(reviews => dispatch(receiveAllReviews(reviews)))
);

export const requestSingleReview = (id) => dispatch => (
  APIUtil.fetchSingleReview(id)
  .then(review => {
    dispatch(receiveSingleReview(review));
    return review;
  })
);

export const createReview = review => dispatch => (
  APIUtil.createReview(review)
  .then(newReview => {
    dispatch(receiveSingleReview(newReview));
    dispatch(clearErrors());
  }, err => (dispatch(receiveErrors(err.responseJSON))))
);

export const deleteReview = (id) => dispatch => (
  APIUtil.destroyReview(id)
  .then(review => dispatch(receiveDelete(review)))
);

export const receiveAllReviews = (restaurant) => ({
    type: RECEIVE_ALL_REVIEW,
    restaurant,
});

const receiveSingleReview = (review) => ({
  type: RECEIVE_SINGLE_REVIEW,
  review,
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
