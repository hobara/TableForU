class Api::RestaurantsController < ApplicationController

  def show
    @restaurant = Restaurant.find(params[:id])
  end

  def index
    @restaurants = Restaurant.all
  end

  def create
    @restaurant = Restaurant.new(restaurant_params)
    if @restaurant.save
      render '/api/restaurants/show'
    else
      render json: @restaurant.errors.full_messages, status: 422
    end
  end

  def update
    @restaurant = Restaurant.find(params[:id])
    if @restaurant.update_attributes(restaurant_params)
      render '/api/restaurants/show'
    else
      render json: @restaurant.errors.full_messages, status: 422
    end
  end

  def destroy
    @restaurant = Restaurant.find(params[:id])
    @restaurant.destroy
    render '/api/restaurants/show'
  end

  def restaurant_params
    params.require(:restaurant).permit(:name, :address, :city_name, :state,
     :zip, :about, :image1, :image2, :image3, :city_id, :cuisine, :price, :hours,
      :rate, :owner_id)
  end


end
