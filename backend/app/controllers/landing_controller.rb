class LandingController < ApplicationController
  def index
    render json: {
      service: '推しグルメ福岡 API',
      message: 'Landing endpoint is running',
      status: 'ok'
    }
  end
end