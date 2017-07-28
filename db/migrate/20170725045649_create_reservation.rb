class CreateReservation < ActiveRecord::Migration[5.1]
  def change
    create_table :reservations do |t|
      t.integer :user_id, null: false
      t.integer :restaurant_id, null: false
      t.integer :seats, null: false
      t.string :date, null: false
      t.string :time, null: false
    end
  end
end
