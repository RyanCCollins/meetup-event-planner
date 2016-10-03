class ApiController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_actions :authenticate_user_from_token!
  def new
  end

  def create
    query_string = params[:query]
    query_variables = ensure_hash(params[:variables])
    result = MeetupEventPlannerSchema.execute(
      query_string,
      variables: query_variables,
      context: { current_user: current_user }
    )
    render json: result
  end

  def authenticate_user_from_token!
    return authentication_error unless auth_token.include?(':')
    user_id = auth_token.split(':').first
    user = User.where(id: user_id).first
    if user && Devise.secure_compare(user.auth_token, auth_token)
      sign_in user, store: false
    else
      authentication_error
    end
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
