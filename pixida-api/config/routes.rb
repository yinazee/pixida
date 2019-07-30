Rails.application.routes.draw do
  resources :statuses
  resources :customers
  resources :items
  resources :services
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  scope '/api' do
    resources :orders
    resources :customers
    resources :items
    resources :services
    resources :statuses
  end
end
