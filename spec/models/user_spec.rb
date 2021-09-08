require 'rails_helper'

RSpec.describe User, type: :model do
  subject {
    described_class.new(
      first_name: 'kelen',
      last_name: 'yafuso',
      email: 'team.kyac@gmail.com',
      state: 'CA',
      role: 'Looking for pet',
      password: 'password'
    )
  }

  it 'is valid with valid attributes' do
    expect(subject).to be_valid
  end

  it 'is not valid without first_name' do
    subject.first_name = nil
    expect(subject).to_not be_valid
  end

  it 'is not valid without last_name' do
    subject.last_name = nil
    expect(subject).to_not be_valid
  end

  it 'is not valid without state' do
    subject.state = nil
    expect(subject).to_not be_valid
  end

  it 'is not valid without role' do
    subject.role = nil
    expect(subject).to_not be_valid
  end
end
