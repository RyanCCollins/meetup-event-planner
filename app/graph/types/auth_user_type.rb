AuthUserType = GraphQL::ObjectType.define do
  name 'AuthUser'
  description 'The authenticated user model type'
  field :id, types.ID, 'The id of this user'
  field :name, !types.String, 'The name of the user'
  field :email, !types.String, 'The email of the user'
  field :bio, types.String, 'The bio of the user'
  field :created_at, types.String, 'The datetime string when the user was created'
  field :events, types[EventType], 'The user events'
  field :avatar, types.String, 'The user avatar'
  field :auth_token, types.String, 'The user auth token'
end
