export const createCity = (city) => (
  $.ajax({
    method: 'POST',
    url: '/api/cities',
    data: city
  })
);

export const fetchAllCity = () => (
  $.ajax({
    method: 'GET',
    url: '/api/cities'
  })
);

export const fetchSingleCity = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/cities/${id}`
  })
);
