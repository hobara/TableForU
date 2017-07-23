class Api::CitiesController < ApplicationController

  def show
    @city = City.find(params[:id])
  end

  def index
    @cities = City.all
  end

  def city_params
    params.require(:city).permit(:name, :image)
  end
end
