class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.string :service_type
      t.string :item_type
      t.boolean :comeback

      t.timestamps
    end
  end
end
