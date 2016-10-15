module UserMutations
  SignUp = GraphQL::Relay::Mutation.define do
    name 'SignUp'
    description 'Sign up a User'
    input_field :user_signup, UserSignupInputType

    return_field :user, AuthUserType
    resolve -> (args, ctx) {
      input_args = args[:user_signup]
      @user = User.create(
        name: input_args[:name],
        email: input_args[:email],
        password: input_args[:password],
        password_confirmation: input_args[:password_confirmation]
      )
      @user.bio = input_args[:bio] if input_args[:bio]
      @user.employer = input_args[:employer] if input_args[:employer]
      if @user.save
        {
          user: @user
        }
      end
    }
  end
  SignIn = GraphQL::Relay::Mutation.define do
    name 'SignIn'
    description 'Sign in a User'
    input_field :email, !types.String
    input_field :password, !types.String

    return_field :user, AuthUserType
    resolve -> (args, ctx) {
      @user = User.find_for_database_authentication(email: args[:email])
      if @user.valid_password?(args[:password])
        {
          user: @user
        }
      else
        {
          user: {}
        }
      end
    }
  end
  UpdateProfile = GraphQL::Relay::Mutation.define do
    name 'UpdateProfile'
    description 'Update the user profile'
    input_field :auth_token, !types.String
    input_field :profile, ProfileInputType

    return_field :user, AuthUserType
    resolve -> (args, ctx) {
      @user = User.find_by(auth_token: args[:auth_token])
      @user.name = args[:profile][:name] if args[:profile][:name]
      @user.bio = args[:profile][:bio] if args[:profile][:bio]
      @user.avatar = args[:profile][:avatar] if args[:profile][:avatar]
      @user.email = args[:profile][:email] if args[:profile][:email]
      @user.employer = args[:profile][:employer] if args[:profile][:employer]
      @user.save!
      {
        user: @user
      }
    }
  end
end
