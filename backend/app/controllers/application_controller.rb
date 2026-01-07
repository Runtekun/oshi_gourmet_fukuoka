class ApplicationController < ActionController::API
  # APIモードでもDeviseのセッション認証（Cookie）を使うために追加
  include ActionController::Cookies
  # Cookieを使った認証を安全に行うためのCSRF対策のため追加
  include ActionController::RequestForgeryProtection
end
