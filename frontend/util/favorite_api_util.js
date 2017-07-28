export const createFavorite = (favorite) => (
  $.ajax({
    method: 'POST',
    url: `/api/users/${favorite.user_id}/favorites`,
    data: favorite
  })
);

export const deleteFavorite = (favorite) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/users/${favorite.user_id}/favorites/${favorite.id}`
  })
);
