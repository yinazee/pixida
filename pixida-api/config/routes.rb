Rails.application.routes.draw do


  get "/new", to: "orders#create"

    resources :orders
    resources :customers
    resources :items
    resources :services

end
