class Order < ApplicationRecord
  belongs_to :customer

  has_one :service_type
  has_one :item_type


end
