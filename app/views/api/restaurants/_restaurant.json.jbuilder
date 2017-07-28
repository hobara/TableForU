json.extract! restaurant, :id, :name, :address, :city_name, :state,
 :zip, :about, :image1, :image2, :image3, :city_id, :cuisine, :price, :hours,
 :rate

 json.reviews restaurant.reviews do |review|
   json.extract! review, :id, :user_id, :reservation_id, :rate, :comment, :created_at
   json.username review.user.username
   json.date review.reservation.date
 end
