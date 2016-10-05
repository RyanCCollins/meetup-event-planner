class AddAvatarToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :avatar, :string, default: 'https://github.com/RyanCCollins/cdn/blob/master/misc/no-user.png?raw=true'
  end
end
