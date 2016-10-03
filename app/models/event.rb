class Event < ApplicationRecord
  belongs_to :host
  has_many :guests
  enum event_type: [:birthday, :conference, :office, :wedding, :other]
end
