UserSignupInputType = GraphQL::InputObjectType.define do
  name 'UserSignupInput'
  description 'The data the user enters on signup'
  input_field :email, !types.String
  input_field :name, !types.String
  input_field :password, !types.String
  input_field :password_confirmation, !types.String
  input_field :bio, types.String
  input_field :employer, types.String
end
