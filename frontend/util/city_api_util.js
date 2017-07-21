export const createCity = (city) => (
  $.ajax({
    method: 'POST',
    url: '/api/city',
    data: city
  })
);

export const fetchAllCity = () => (
  $.ajax({
    method: 'GET',
    url: '/api/city',
  })
);

export const fetchSingleCity = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/city/${id}`
  })
);
