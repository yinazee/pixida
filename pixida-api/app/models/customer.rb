class Customer < ApplicationRecord
  has_many :orders
  belongs_to :order
  validates :first_name, uniqueness: true
  validates :last_name, uniqueness: true
end
