SignUpMutation = GraphQL::Relay::Mutation.define do
  name 'SignUp'
  description 'Sign up a User'
  input_field :email, !types.String
  input_field :name, !types.String
  input_field :password, !types.String
  input_field :password_confirmation, !types.String

  return_field :user, UserType
  resolve -> (args, ctx) {
    @user = User.create(
      name: args[:name],
      email: args[:email],
      password: args[:password],
      password_confirmation: args[:password_confirmation]
    )
    if @user.save
      {
        user: @user
      }
    end
  }
end
