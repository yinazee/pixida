class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.integer :order_number
      t.string :service_type
      t.string :item_type
      t.boolean :comeback
      t.integer :customer_id

      t.timestamps
    end
  end
end
