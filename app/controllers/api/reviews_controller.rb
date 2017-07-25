class Api::ReviewsController < ApplicationController

  def show
    @review = Review.find(params[:id])
  end

  def index
    @reviews = Restaurant.find(params[restaurant_id]).reviews.all
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render '/api/reviews/show'
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    render '/api/reviews/show'
  end

  def review_params
    params.require(:review).permit(:user_id, :restaurant_id, :reservation_id, :rate, :comment)
  end

end
