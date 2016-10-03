class AddAuthTokenToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :auth_token, :string
  end
end
