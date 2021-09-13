class CreatePets < ActiveRecord::Migration[6.1]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :species
      t.string :sex
      t.string :breed
      t.boolean :vaccinations
      t.string :medical, array: true
      t.text :behavior
      t.boolean :fixed
      t.boolean :available
      t.string :age
      t.text :description
      t.string :city
      t.string :state
      t.boolean :housetrained
      t.boolean :declawed
      t.boolean :lived_with_children
      t.boolean :lived_with_animals
      t.string :img_caption
      t.belongs_to :user

      t.timestamps
    end
  end
end
