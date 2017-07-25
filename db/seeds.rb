# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# destroy
City.destroy_all
san_francisco = City.create(name: "San Francisco", city_id: 1, image: "https://res.cloudinary.com/hobara/image/upload/v1500653899/sf_nwaj28.jpg")
los_angeles = City.create(name: "Los Angeles", city_id: 2, image: "https://res.cloudinary.com/hobara/image/upload/v1500523312/la_cvzhsc.jpg")
london = City.create(name: "London", city_id: 3, image: "https://res.cloudinary.com/hobara/image/upload/c_scale,w_1600/v1500920043/lon_mjmg1r.jpg")
chicago = City.create(name: "Chicago", city_id: 4, image: "https://res.cloudinary.com/hobara/image/upload/c_scale,w_1600/v1500922595/sawyer-bengtson-256260_rdrdyk.jpg")
austin = City.create(name: "Austin", city_id: 5, image: "https://res.cloudinary.com/hobara/image/upload/v1500523339/aus_gg4uwn.jpg")
new_york = City.create(name: "New York", city_id: 6, image: "https://res.cloudinary.com/hobara/image/upload/v1500609470/ny_gmpile.jpg")
dc = City.create(name: "Washington DC", city_id: 7, image: "https://res.cloudinary.com/hobara/image/upload/c_scale,w_1600/v1500921957/dc_ebbhpv.jpg")
toronto = City.create(name: "Toronto", city_id: 8, image: "https://res.cloudinary.com/hobara/image/upload/c_scale,w_1600/v1500920926/toro_zskrrz.jpg")
paris = City.create(name: "Paris", city_id: 9, image: "https://res.cloudinary.com/hobara/image/upload/c_scale,w_1600/v1500921300/pari_un6q1f.jpg")
singapore = City.create(name: "Singapore", city_id: 10, image: "https://res.cloudinary.com/hobara/image/upload/c_scale,w_1600/v1500921843/sin_vu9uew.jpg")
tokyo = City.create(name: "Tokyo", city_id: 11, image: "https://res.cloudinary.com/hobara/image/upload/v1500523367/ty_p22udr.jpg")
osaka = City.create(name: "Osaka", city_id: 12, image: "https://res.cloudinary.com/hobara/image/upload/v1500523368/os_atxxvu.jpg")

User.destroy_all
geust = User.create(username: 'Guest', password: 'password', email: 'guest@email.com')


Restaurant.destroy_all
sf1 = Restaurant.create(name:"Mochia", address:"1469 18th St", city_name:"San Francisco", state:"CA", zip:94107,
about:"Colorful, upbeat Peruvian restaurant serving a mix of tapas & classic regional entrees like ceviche.",
image:"https://res.cloudinary.com/hobara/image/upload/v1500802761/sf1_jfa6bg.jpg",
city_id: 1, cuisine: 8, price: 3, hours: 1, favorites: 0, rate: 0, owner_id: 1)

sf2 = Restaurant.create(name:"Piccino", address:"1001 Minnesota St", city_name:"San Francisco", state:"CA", zip:94107,
about:"Sister location to Piccino Cafe serving espresso drinks & housemade baked goods in sleek surrounds.",
image:"https://res.cloudinary.com/hobara/image/upload/v1500862326/sf2_p0cba4.jpg",
city_id: 1, cuisine: 2, price: 2, hours: 3, favorites: 0, rate: 0, owner_id: 1)
