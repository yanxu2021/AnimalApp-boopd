require 'rest-client'

class ApiController < ActionController::Base
  def get_dog_info
    response = RestClient.get 'http://api.thedogapi.com/v1/breeds/', {:Authorization => ENV['DOG_API_KEY']}
    render json: response
  end
end
