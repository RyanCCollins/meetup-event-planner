class ApiController < ApplicationController
  skip_before_action :verify_authenticity_token
  #before_action :authenticate_user_from_token!
  def new
  end

  def create
    query_string = params[:query]
    query_variables = ensure_hash(params[:variables])
    result = MeetupEventPlannerSchema.execute(
      query_string,
      variables: query_variables,
      context: { }
    )
    render json: result
  end

  def authenticate_user_from_token!
    auth_token = request.headers['Authorization']
    return authentication_error unless auth_token
    authenticate_with_auth_token auth_token
  end

  def authenticate_with_auth_token(auth_token)
    user = User.find_by(auth_token: auth_token)
    if user && Devise.secure_compare(user.auth_token, auth_token)
      sign_in user, store: false
    else
      authentication_error
    end
  end

  # Authentication Failure
  def authentication_error
    # User's token is either invalid or not in the right format
    render json: {error: t('application_controller.unauthorized')}, status: 401
  end

  private

  def ensure_hash(query_variables)
    if query_variables.blank?
      {}
    elsif query_variables.is_a?(String)
      JSON.parse(query_variables)
    else
      query_variables
    end
  end
end
