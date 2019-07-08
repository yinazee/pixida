Rails.application.routes.draw do
  resources :item_types
  resources :service_types
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  scope '/api' do
    resources :customers
  end
end
