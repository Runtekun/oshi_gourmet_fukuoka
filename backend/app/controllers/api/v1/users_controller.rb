class Api::V1::UsersController < ApplicationController
    before_action :authenticate_user!
    before_action :set_user
  
    def show
      render json: @user
    end
  
    def update
      if @user.update(user_params)
        render json: @user
      else
        render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    private
  
    def set_user
      @user = current_user
    end
  
    def user_params
      params.require(:user).permit(:name, :avatar, :introduction) 
    end
end