class Event < ApplicationRecord
  belongs_to :host
  has_many :guests
  belongs_to :user
  alias_attribute :created_by, :user
  enum event_type: [:birthday, :conference, :office, :wedding, :other, :coding]
end
