class Api::FavoritesController < ApplicationController

  def show
    @favorite = Favorite.find(params[:id])
  end

  def index
    @favorites = Favorite.all
  end

  def create
    @favorite = Favorite.new(favorite_params)
    if @favorite.save
      render '/api/favorites/show'
    else
      render json: @favorite.errors.full_messages, status: 422
    end
  end

  def destroy
    @favorite = Favorite.find(params[:id])
    @favorite.destroy
    render '/api/favorites/show'
  end

  def favorite_params
    params.require(:favorite).permit(:user_id, :restaurant_id)
  end


end
