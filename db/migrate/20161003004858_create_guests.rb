class CreateGuests < ActiveRecord::Migration[5.0]
  def change
    create_table :guests do |t|
      t.references :event, foreign_key: true
      t.string :name

      t.timestamps
    end
  end
end
