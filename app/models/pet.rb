class Pet < ApplicationRecord
  validates :name, :species, :sex, :available, :breed, :state, presence: true
  validates :fixed, inclusion: { in: [ true, false ] }
end
