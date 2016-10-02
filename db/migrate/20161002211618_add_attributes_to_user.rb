class AddAttributesToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :name, :string, null: false
    add_column :users, :bio, :text
  end
end
