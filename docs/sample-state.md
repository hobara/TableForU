```{
  currentUser: {
    id: userId,
    username: `${firstName lastName}`
  }

  forms: {
    signUp: { errors: []},
    signIn: { errors: []},
    review: { errors: []},
  }

  restaurants: {
    id: {
      owner_id: userId,
      name: restaurantName,
      city_id: cityId
      address: string of address,
      type: type of dining,
      price: price range,
      hours: hours of operation,
      about: text about restaurants,
      photos: urls for photos,
    }
  }

  reservations: {
    id: {
      user: belongs to user,
      restaurant: belongs to restaurant,
      time: time,
      date: date,
    }
  }

  reviews: {
    id: {
      restaurant: restaurant_id,
      rating: integer in the scale of 5,
      comment: text
      date: user reservation date,
    }
  }

  favorites: {
    restaurant: restaurant_id,
  }
}```
