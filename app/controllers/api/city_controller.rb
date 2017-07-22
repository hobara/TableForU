class Api::CityController < ApplicationController

  def show
    @city = City.find(params[:id])
    render '/api/cities/show'
  end

  def index
    @cities = City.all
    render '/api/cities/index'
  end

  def city_params
    params.require(:city).permit(:name, :image)
  end
end
