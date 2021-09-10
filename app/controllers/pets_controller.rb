class PetsController < ApplicationController
  def index
    pets = Pet.all
    render json: pets
  end

  def create
    if current_user
      pet = current_user.pets.create(pet_params)
      render json: pet
    else
      head 401
    end
  end

  private
  def pet_params
    params.require(:pet).permit(:name, :species, :sex, :breed, :vaccinations, :medical, :behavior, :fixed, :available, :age, :description, :city, :state, :housetrained, :declawed, :lived_with_children, :lived_with_animals, :img_caption)
  end
end
