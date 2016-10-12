class AddEmployerToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :employer, :string
  end
end
