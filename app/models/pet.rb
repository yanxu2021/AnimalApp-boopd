class Pet < ApplicationRecord
  validates :name, :species, :sex, :fixed, :available, :breed, :state, presence: true
end
