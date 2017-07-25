class Restaurant < ApplicationRecord
  validates :name, :address, :city_name, :state,
   :zip, :about, :image, :city_id, :cuisine, :price, :hours, :favorites,
    :rate, presence: true

  belongs_to :city,
    primary_key: :city_id,
    foreign_key: :city_id,
    class_name: :City
  # has_many :photos

end
