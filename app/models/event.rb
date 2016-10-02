class Event < ApplicationRecord
  belongs_to :host
  enum type: [:birthday, :conference, :office, :wedding, :other]
end
