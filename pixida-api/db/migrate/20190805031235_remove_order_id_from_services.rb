class RemoveOrderIdFromServices < ActiveRecord::Migration[5.2]
  def change
    remove_column :services, :order_id, :integer
  end
end
