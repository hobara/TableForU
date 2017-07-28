Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show] do
      resources :favorites, only: [:create, :show, :index, :destroy]
    end
    resource  :session, only: [:create, :destroy, :show]
    resources :cities, only: [:show, :index]
    resources :restaurants, only: [:create, :show, :index, :edit, :destroy]
    resources :reservations, only: [:create, :show, :index, :destroy]
    resources :reviews, only: [:create, :show, :index, :destroy]

  end

  root to: "static_pages#root"
end
