require 'rails_helper'

RSpec.describe Pet, type: :model do
  subject {
    described_class.new(
      name: 'name',
      species: 'species',
      sex: 'sex',
      breed: 'breed',
      vaccinations: false,
      medical: ['array', 'of', 'strings'],
      behavior: 'text',
      fixed: true,
      available: true,
      age: 10,
      description: 'some more text',
      city: 'a city',
      state: 'Alaska',
      housetrained: true,
      declawed: true,
      lived_with_children: false,
      lived_with_animals: false,
      img_caption: 'this is a picture of someone elses dog',
      user_id: 1
    )
  }

  it 'is valid with valid attributes' do
    expect(subject).to be_valid
  end

  it 'is not valid without name' do
    subject.name = nil
    expect(subject).to_not be_valid
  end

  it 'is not valid without species' do
    subject.species = nil
    expect(subject).to_not be_valid
  end

  it 'is not valid without sex' do
    subject.sex = nil
    expect(subject).to_not be_valid
  end

  it 'is not valid without available' do
    subject.available = nil
    expect(subject).to_not be_valid
  end

  it 'is not valid without breed' do
    subject.breed = nil
    expect(subject).to_not be_valid
  end

  it 'is not valid without state' do
    subject.state = nil
    expect(subject).to_not be_valid
  end
end
