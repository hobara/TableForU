class City < ApplicationRecord
  validates :name, :image, presence: true

  has_many :restaurants,
    primary_key: :id,
    foreign_key: :city_id,
    class_name: :City

end
