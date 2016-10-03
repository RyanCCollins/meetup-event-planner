class AddLocationToEvent < ActiveRecord::Migration[5.0]
  def change
    add_column :events, :location, :string
  end
end
