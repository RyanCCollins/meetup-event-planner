class ChangeEventTypeToEventType < ActiveRecord::Migration[5.0]
  def change
    rename_column :events, :type, :event_type
  end
end
