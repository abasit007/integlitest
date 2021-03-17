Rails.application.routes.draw do
  get 'products', to: 'products#index'
  get 'products/new', to: 'products#new'
  get 'products/show/:id', to: 'products#show'
  post 'products/create'
  post 'products/add_to_cart', to: 'products#add_to_cart'
  post '/checkout', to: 'products#checkout'
  get 'cart', to: 'products#cart'
  resources :users, only: [:new, :create]
  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  get 'welcome', to: 'sessions#welcome'
  get 'authorized', to: 'sessions#page_requires_login'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
