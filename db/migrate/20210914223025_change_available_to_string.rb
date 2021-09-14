class ChangeAvailableToString < ActiveRecord::Migration[6.1]
  def change
    change_column :pets, :available, :string
  end
end
