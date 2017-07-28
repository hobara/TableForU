json.extract! user, :username, :id
json.favorites do
  json.array! user.favorites do |favorite|
    json.extract! favorite, :id, :user_id, :restaurant_id
    json.set! :restaurant do
      json.extract! favorite.restaurant, :id
    end
  end
end
json.reservations user.reservations do |reservation|
    json.reservation_id reservation.id
    json.extract! reservation, :time, :date, :seats
    json.restaurant do
      json.extract! reservation.restaurant, :id
    end
end
