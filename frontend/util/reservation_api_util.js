export const createReservation = (reservation) => (
  $.ajax({
    method: 'POST',
    url: '/api/reservations',
    data: reservation
  })
);

export const fetchAllReservation = () => (
  $.ajax({
    method: 'GET',
    url: '/api/reservations'
  })
);

export const fetchSingleReservation = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/reservations/${id}`
  })
);

export const deleteReservation = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/restaurants/:restaurant_id/reservations/${id}`
  })
);
