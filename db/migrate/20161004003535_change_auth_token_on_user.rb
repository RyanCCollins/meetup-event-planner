class ChangeAuthTokenOnUser < ActiveRecord::Migration[5.0]
  def change
    change_column :users, :auth_token, :string, default: "" 
  end
end
