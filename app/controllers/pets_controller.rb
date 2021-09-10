class PetsController < ApplicationController
  before_action :authenticate_user!, only: [:create]
  def index
    pets = Pet.all
    render json: pets
  end

  def show
    pet = Pet.find(params[:id])
    render json: pet
  end

  def create
      pet = current_user.pets.create(pet_params)
      render json: pet
  end

  private
  def pet_params
    params.require(:pet).permit(:name, :species, :sex, :breed, :vaccinations, :medical, :behavior, :fixed, :available, :age, :description, :city, :state, :housetrained, :declawed, :lived_with_children, :lived_with_animals, :img_caption)
  end
end
