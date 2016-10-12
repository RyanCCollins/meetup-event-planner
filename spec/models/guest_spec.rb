require 'rails_helper'

RSpec.describe Guest, type: :model do
  it 'should be valid with valid attributes' do
    event = Event.all.first
    expect(
      Guest.new(name: 'Bill Gates', event: event)
    ).to be_valid
  end
  it 'should fail without a valid event' do
    expect(
      Guest.new(name: 'Bill Gates')
    ).to_not be_valid
  end
  describe 'Associations' do
    it { should belongs_to(:event) }
  end
end
