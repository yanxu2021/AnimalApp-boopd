Rails.application.routes.draw do
  resources :pets
  devise_for :users, :controllers => { :registrations => "users/registrations" }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/dogs', to: 'api#index'
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'
end
