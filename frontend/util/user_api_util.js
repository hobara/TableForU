export const requestUser = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${id}`
  })
);

export const requestReservation = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/reservations/${id}`
  })
);

export const destroyReservation = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/reservations/${id}`,
  })
);
