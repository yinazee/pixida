class OrderSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :customer
  belongs_to :item
  belongs_to :service
  attributes :status
end
