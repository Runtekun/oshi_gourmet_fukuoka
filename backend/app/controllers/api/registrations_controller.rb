class Api::RegistrationsController < ApplicationController

def create
    @user = User.new(registration_params)
    if @user.save
      render json: { message: "登録に成功しました！" }, status: :created
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
end


private

def registration_params
    params.require(:registration).permit(:username, :email, :password, :password_confirmation)
end