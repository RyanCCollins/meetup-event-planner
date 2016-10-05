UserType = GraphQL::ObjectType.define do
  name 'User'
  description 'The user model type'
  field :id, types.ID, 'The id of this user'
  field :name, !types.String, 'The name of the user'
  field :bio, types.String, 'The bio of the user'
  field :events, types[EventType], 'The user events'
  field :avatar, types.String, 'The user avatar'
end
