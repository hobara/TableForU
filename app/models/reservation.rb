class Reservation < ApplicationRecord
  validates :user, :restaurant, presence: true

  belongs_to :user,
   primary_key: :id,
   foreign_key: :user_id,
   class_name: :User

  belongs_to :restaurant,
    primary_key: :id,
    foreign_key: :restaurant_id,
    class_name: :Restaurant

  has_many :reviews,
    primary_key: :id,
    foreign_key: :reservation_id,
    class_name: :Review

end
