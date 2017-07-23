class Restaurant < ApplicationRecord
  validates :name, :address, :city_name, :state,
   :zip, :about, :image, :city_id, :cuisine, :price, :hours, :favorites,
    :rate, presence: true
  belongs_to :city
  has_many :reviews
end
