class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.string :name
      t.integer :type
      t.datetime :start_date
      t.datetime :end_date
      t.text :message

      t.timestamps
    end
  end
end
