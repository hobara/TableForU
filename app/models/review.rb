class Review < ApplicationRecord
  validates :user_id, :restaurant_id, :reservation_id, :rate, :comment, null: false

  belongs_to :reservation,
    primary_key: :id,
    foreign_key: :reservation_id,
    class_name: :Reservation

  has_one :user,
    through: :reservation,
    source: :user

  has_one :restaurant,
    thourgh: :reservation,
    source: :restaurant

end
