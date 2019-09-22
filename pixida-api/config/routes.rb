Rails.application.routes.draw do

  get "/new", to: "orders#create"

  scope '/api' do
    resources :orders
    resources :customers
    resources :items
    resources :services
    resources :statuses
  end
end
