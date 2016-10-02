class AddHostToEvent < ActiveRecord::Migration[5.0]
  def change
    add_column :events, :host_id, :integer
    add_index :events, :host_id
  end
end
