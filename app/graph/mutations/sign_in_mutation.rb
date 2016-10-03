SignInMutation = GraphQL::Relay::Mutation.define do
  name 'SignIn'
  description 'Sign in a User'
  input_field :email, !types.String
  input_field :password, !types.String

  return_field :auth_token, types.String
  resolve -> (args, ctx) {
    @user = User.find_for_database_authentication(email: args[:email])
    auth_token = if @user.valid_password?(args[:password])
      @user.auth_token
    end
    {
      auth_token: auth_token
    }
  }
end
