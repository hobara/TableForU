export const createReview = (review) => (
  $.ajax({
    method: 'POST',
    url: '/api/reviews',
    data: review
  })
);

export const fetchAllReview = (restaurant_id) => (
  $.ajax({
    method: 'GET',
    url: '/api/reviews',
    data: {restaurant_id}
  })
);

export const fetchSingleReview = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/reviews/${id}`
  })
);

export const deleteRestaurant = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/restaurants/:restaurant_id/reviews/${id}`
  })
);
