class User < ApplicationRecord
  after_create generate_auth_token!
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  def generate_auth_token!
    auth_token = "#{self.id}:#{Devise.friendly_token}"
    save!
  end
end
