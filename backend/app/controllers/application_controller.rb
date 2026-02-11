class ApplicationController < ActionController::API
        include DeviseTokenAuth::Concerns::SetUserByToken

        before_action :configure_permitted_parameters, if: :devise_controller?

        protected
        def configure_permitted_parameters
          # サインアップ時に許可するパラメータを追加
          devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
        end
end
