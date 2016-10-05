ProfileInputType = GraphQL::InputObjectType.define do
  name 'ProfileInput'
  description 'The user profile type'
  input_field :name, types.String, 'The name of the user'
  input_field :email, types.String, 'The email of the user'
  input_field :bio, types.String, 'The bio of the user'
  input_field :avatar, types.String, 'The user avatar'
end
