class Api::CitiesController < ApplicationController

  def create
    @city = City.new(city_params)
    if @city.save
      redirect_to '/'
    else
      render json: @city.errors.full_messages, status: 422
    end
  end

  def show
    @city = City.find_by(name: name)
    redirect_to '/'
  end

  def index
    @cities = City.all
    redirect_to '/'
  end

  def city_params
    params.require(:city).permit(:name, :image)
  end
end


def create
  @user = User.new(user_params)
  if @user.save
    log_in(@user)
    render '/api/users/show'
  else
    render json: @user.errors.full_messages, status: 422
  end
end

def user_params
  params.require(:user).permit(:username, :password, :email)
end
