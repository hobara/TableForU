class CreateReview < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :restaurant_id, null: false
      t.integer :reservation_id, null: false
      t.integer :rate, null: false
      t.text :comment, null: false
      t.timestamps
    end
  end
end
