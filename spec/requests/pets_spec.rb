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
  let(:user2){ User.create!({
    email: 'nochange@test.com',
    password: 'password1',
    first_name: 'hacker',
    last_name: 'slacker',
    role: 'little guy',
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
        expect(response.status).to be 302
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

  describe 'show' do
    let(:request){ get "/pets/#{pet3.id}" }
    let (:expected_response){{
      "id"=>pet3.id,
      "name"=>pet3.name,
      "species"=>pet3.species,
      "sex"=>pet3.sex,
      "breed"=>pet3.breed,
      "vaccinations"=>pet3.vaccinations,
      "medical"=>pet3.medical,
      "behavior"=>pet3.behavior,
      "fixed"=>pet3.fixed,
      "available"=>pet3.available,
      "age"=>pet3.age,
      "description"=>pet3.description,
      "city"=>pet3.city,
      "state"=>pet3.state,
      "housetrained"=>pet3.housetrained,
      "declawed"=>pet3.declawed,
      "lived_with_children"=>pet3.lived_with_children,
      "lived_with_animals"=>pet3.lived_with_animals,
      "img_caption"=>pet3.img_caption,
      "user_id"=>pet3.user_id
    }}

    it 'returns pet 3' do
      request
      expect(response.status).to be 200
      expect(JSON.parse(response.body)).to include expected_response
    end
  end

  describe 'edit' do
    let(:request){ patch "/pets/#{pet3.id}", params: {
      pet: {
        name: 'new name',
        age: 5
      }
    }}
    let (:expected_response){{
      "id"=>pet3.id,
      "name"=>'new name',
      "species"=>pet3.species,
      "sex"=>pet3.sex,
      "breed"=>pet3.breed,
      "vaccinations"=>pet3.vaccinations,
      "medical"=>pet3.medical,
      "behavior"=>pet3.behavior,
      "fixed"=>pet3.fixed,
      "available"=>pet3.available,
      "age"=>'5',
      "description"=>pet3.description,
      "city"=>pet3.city,
      "state"=>pet3.state,
      "housetrained"=>pet3.housetrained,
      "declawed"=>pet3.declawed,
      "lived_with_children"=>pet3.lived_with_children,
      "lived_with_animals"=>pet3.lived_with_animals,
      "img_caption"=>pet3.img_caption,
      "user_id"=>pet3.user_id
    }}
    it 'updates name and age of pet3 in the database' do
      request
      expect(JSON.parse(response.body)).to include expected_response
    end
    context 'user is not owner of this pet' do
      it 'does not allow other users to modify this pet' do
        sign_in(user2)
        request
        expect(response.status).to be 401
      end
    end
  end

  describe 'destroy' do
    let(:request){ delete "/pets/#{pet3.id}" }
    it 'destroys pet3' do
      expect{ request }.to change{ Pet.count }.by -1
      expect(response.status).to be 204
    end
    context 'user does not own this pet' do
      it 'does not destroy pet3 if user is not owner' do
        sign_in(user2)
        expect{ request }.to change{ Pet.count }.by 0
        expect(response.status).to be 401
      end
    end
  end
end
