class CreateRestaurant < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :city_name, null: false
      t.string :state, null: false
      t.integer :zip, null: false
      t.string :about, null: false
      t.string :image, null: false
      t.integer :city_id, null: false
      t.integer :cuisine, null: false
      t.integer :price, null: false
      t.integer :hours, null: false
      t.integer :rate, null: false
      t.integer :owner_id
    end
  end
end
