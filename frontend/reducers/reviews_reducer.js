import { merge } from 'lodash';
import { RECEIVE_ALL_REVIEW, RECEIVE_SINGLE_REVIEW, RECEIVE_DELETE } from '../actions/review_actions';

const _nullReviews = ({
  reviews: []
});

const ReviewsReducer = (state = _nullReviews, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_REVIEW:
      const reviews = action.restaurant.reviews;
      return Object.assign({}, state, {reviews});
    case RECEIVE_SINGLE_REVIEW:
      let newState = Object.assign({}, state);
        if (!(newState.reviews.includes(action.review))) {
          newState.reviews.push(action.review);
        }
      return newState;
    case RECEIVE_DELETE:
      let desState = Object.assign({}, state);
      desState = desState.filter((rev) => rev.id !== action.id);
      return desState;
    default:
      return state;
  }
};

export default ReviewsReducer;
