class AddAttributesToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :state, :string
    add_column :users, :role, :string
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :about_me, :text
  end
end
