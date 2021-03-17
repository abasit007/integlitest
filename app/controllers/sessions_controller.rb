class SessionsController < ApplicationController

  skip_before_action :authorized, only: [:new, :create, :welcome]

  skip_before_action :verify_authenticity_token, only: [:create]
  
  def new
  end

  def create
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
        session[:user_id] = user.id
        session[:cart] = []
        redirect_to '/welcome'
    end
  end

  def welcome
    
  end

  def login
  end

  def page_requires_login
  end
  
end
