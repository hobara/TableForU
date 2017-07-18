```{
  currentUser: {
    id: userId,
    username: `${firstName lastName}`
  }

  errors: [],

  restaurants: {
    1: {
      id: 1,
      restaurant: restaurant_id
    },
    2: {
      id: 2,
      restaurant: restaurant_id
    }
  }

  restaurant: {
    id: 1
    owner: user_id,
    name: restaurant name,
    city: city_id,
    address: string of address,
    type: type of dining,
    price: price range,
    hours: hours of operation,
    about: text about restaurants,
    photos: urls for photos,
    rate: average rating
  }

  reservation: {
    id: {
      user: user_id,
      restaurant: restaurant_id,
      time: time,
      date: date,
      seats: number of guests
    }
  }

  review: {
    id: {
      author: user_id
      restaurant: restaurant_id,
      rating: rate for restaurant,
      comment: text
      date: user reservation date,
    }
  }

  favorite: {
    user: user_id,
    restaurant: restaurant_id
  }

  user: {
    upcoming_reservation: [],
    past_reservation: [],
    favorite: []
  }

}```
