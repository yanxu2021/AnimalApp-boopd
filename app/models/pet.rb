class Pet < ApplicationRecord
  validates :name, :species, :sex, :available, :breed, :state, presence: true
end
