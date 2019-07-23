class Item < ApplicationRecord
  has_many :orders
  belongs_to :order
  validates :name, uniqueness: true
end
