require 'rails_helper'

RSpec.describe Host, type: :model do
  it 'is valid with valid attributes' do
    expect(
      Host.new(name: 'Malinda Gates')
    ).to be_valid
  end
  describe 'Associations' do
    it { should have_many(:events) }
  end
end
