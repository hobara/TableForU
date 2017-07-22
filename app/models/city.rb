class City < ApplicationRecord

  validates :name, :image, presence: true
  has_many :restaurants

end
