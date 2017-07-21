class City < ApplicationRecord

  validates :name, :image, :city_id, presence: true
  has_many :restaurants

end
