class ChangeCustomerFirstNameToName < ActiveRecord::Migration[5.2]
  def change
    rename_column :customers, :first_name, :name
  end
end
