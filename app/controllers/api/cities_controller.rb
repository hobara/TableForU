class Api::CitiesController < ApplicationController

  def show
    @city = City.find_by(city_id: id)
    render '/api/cities/show'
  end

  def index
    @cities = City.all
  end

  def city_params
    params.require(:city).permit(:name, :image, :city_id)
  end
end
