require 'rails_helper'

RSpec.describe "Pets", type: :request do
  let(:user){ User.create!({
    email: 'test@test.com',
    password: 'password1',
    first_name: 'tester',
    last_name: 'mrtester',
    role: 'big boss',
    state: 'CA'
  }) }
  let(:pet2){ user.pets.create!({
    name: 'Phoebe',
    species: 'Dog',
    sex: 'female',
    breed: 'golden retriever labradoodle',
    vaccinations: false,
    medical: ['none as of yet'],
    behavior: 'chill',
    fixed: true,
    available: false,
    age: '0',
    description: 'puppy dog',
    city: 'Poway',
    state: 'CA',
    housetrained: false,
    declawed: false,
    lived_with_children: false,
    lived_with_animals: true
  }) }
  let(:pet3){ user.pets.create!({
    name: 'Dolly',
    species: 'Dog',
    sex: 'female',
    breed: 'border collie',
    vaccinations: true,
    medical: ['no issues'],
    behavior: 'submissive, likes to start fights',
    fixed: true,
    available: false,
    age: '15',
    description: 'brown purebred border collie',
    city: 'Poway',
    state: 'CA',
    housetrained: true,
    declawed: false,
    lived_with_children: true,
    lived_with_animals: true
  }) }

  before do
    pet2
    pet3
    sign_in(user)
  end

  describe 'create' do
    let(:pet1){ {
      name: 'Dolly',
      species: 'Dog',
      sex: 'female',
      breed: 'border collie',
      vaccinations: true,
      medical: ['no issues'],
      behavior: 'submissive, likes to start fights',
      fixed: true,
      available: false,
      age: '15',
      description: 'brown purebred border collie',
      city: 'Poway',
      state: 'CA',
      housetrained: true,
      declawed: false,
      lived_with_children: true,
      lived_with_animals: true
    } }
    let(:request){ post '/pets', params: { pet: pet1 } }
    it 'creates a new animal belonging to user' do
      expect{ request }.to change{ Pet.count }.by 1
    end
    context 'user is not signed in' do
      it 'does not allow unregistered users to create' do
        sign_out(user)
        expect{ request }.to change{Pet.count}.by 0
        expect(response.status).to be 401
      end
    end
  end

  describe 'index' do
    let(:request){ get '/pets' }
    it 'returns a list of pets in JSON' do
      request
      expect(response.status).to be 200
      expect(JSON.parse(response.body).length).to be 2
    end
  end

  # describe 'show' do

  # end
end
