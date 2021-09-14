class PetsController < ApplicationController
  before_action :authenticate_user!, only: [:create, :update, :destroy]
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

  def update
    pet = Pet.find(params[:id])
    if current_user.id == pet.user_id
      pet.update(pet_params)
      render json: pet
    else
      head 401
    end
  end

  def destroy
    pet = Pet.find(params[:id])
    if current_user.id == pet.user_id
      pet.destroy
    else
      head 401
    end
  end

  private
  def pet_params
    params.require(:pet).permit(:name, :species, :sex, :breed, :vaccinations, :behavior, :fixed, :available, :age, :description, :city, :state, :housetrained, :declawed, :lived_with_children, :lived_with_animals, :img_caption, { :medical => [] })
  end
end
