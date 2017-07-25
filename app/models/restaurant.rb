class Restaurant < ApplicationRecord
  validates :name, :address, :city_name, :state,
   :zip, :about, :image, :city_id, :cuisine, :price, :hours,
    :rate, presence: true

  belongs_to :city,
    primary_key: :city_id,
    foreign_key: :city_id,
    class_name: :City

  has_many :reservations,
    primary_key: :id,
    foreign_key: :restaurant_id,
    class_name: :Reservation

  has_many :favorites,
    primary_key: :id,
    foreign_key: :restaurant_id,
    class_name: :Favorite

  has_many :reviews,
    through: :reservations,
    source: :reviews


end
