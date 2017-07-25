class Review < ApplicationRecord
  validates :user, :restaurant, :reservation, :rate, :comment, presence: true

  belongs_to :reservation,
    primary_key: :id,
    foreign_key: :reservation_id,
    class_name: :Reservation

  has_one :user,
    through: :reservation,
    source: :user

  has_one :restaurant,
    through: :reservation,
    source: :restaurant

end
