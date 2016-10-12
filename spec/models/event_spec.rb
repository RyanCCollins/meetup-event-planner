require 'rails_helper'

RSpec.describe Event, type: :model do
  it { should belong_to(:host) }
  it { should belong_to(:user) }
  it { should have_many(:guests) }
  it { should define_enum_for(:event_type) }
end
