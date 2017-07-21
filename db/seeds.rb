# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# destroy
City.destroy_all
san_francisco = City.create(name: "San Francisco", image: "http://res.cloudinary.com/hobara/image/upload/v1500523306/sf_nwaj28.jpg")
los_angeles = City.create(name: "Los Angeles", image: "http://res.cloudinary.com/hobara/image/upload/v1500523312/la_cvzhsc.jpg")
seattle = City.create(name: "Seattle", image: "http://res.cloudinary.com/hobara/image/upload/v1500523321/se_qlkgic.jpg")
chicago = City.create(name: "Chicago", image: "http://res.cloudinary.com/hobara/image/upload/v1500523329/chi_rnturk.jpg")
austin = City.create(name: "Austin", image: "http://res.cloudinary.com/hobara/image/upload/v1500523339/aus_gg4uwn.jpg")
new_york = City.create(name: "New York", image: "http://res.cloudinary.com/hobara/image/upload/v1500523336/ny_u9baxt.jpg")
dc = City.create(name: "Washington DC", image: "http://res.cloudinary.com/hobara/image/upload/v1500523351/dc_cbkolj.jpg")
toronto = City.create(name: "Toronto", image: "http://res.cloudinary.com/hobara/image/upload/v1500523360/tor_dnrvyg.jpg")
paris = City.create(name: "Paris", image: "http://res.cloudinary.com/hobara/image/upload/v1500523415/par_r2gu87.jpg")

User.destroy_all
geust = User.create(username: 'Guest', password: 'password', email: 'guest@email.com')
