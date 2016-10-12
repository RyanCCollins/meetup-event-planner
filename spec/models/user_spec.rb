require 'rails_helper'

RSpec.describe User, type: :model do
  it 'is valid with valid attributes' do
    expect(
      User.new(
        name: 'GraphQL User',
        email: 'user@graphql.org',
        password: 'GraphQLUser123'
      )
    ).to be_valid
  end
  it 'is not valid without a name' do
    expect(
      User.new(
        name: nil,
        email: 'user@graphql.org',
        password: 'GraphQLUser123'
      )
    ).to_not be_valid
  end
  it 'is not valid without a valid email' do
    expect(
      User.new(
        name: 'GraphQL User',
        email: 'user@graphql',
        password: 'GraphQLUser123'
      )
    ).to_not be_valid
  end
end
