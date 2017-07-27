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
sf1 = Restaurant.create(name:"Mochica", address:"1469 18th St", city_name:"San Francisco", state:"CA", zip:94107,
about:"San Francisco’s critically acclaimed Mochica, the home of Peruvian Fusion, has moved to a new and larger location, now in the Mission (Potrero Hill). Long considered one of San Francisco's best kept secrets, Chef Carlos Altamirano prominently features the unmistakable touch of Peru, with the distinct flavors of regional spices in every dish; yet with unexpected and delightful twists. Come and experience the new Mochica with its large open kitchen, 2 private dining rooms and a full bar plus pisco bar. Accommodating small and large party's for business or special occasions. Happy Hour party's for groups larger than 15 people. We’re confident that you’ll have a memorable good time!",
image1:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1500802761/sf1_jfa6bg.jpg",
image2:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501145041/sf1-1_tir2gz.jpg",
image3:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501145042/sf1-2_cckmei.jpg",
city_id: 1, cuisine: 10, price: 3, hours: 1, rate: 0, owner_id: 1)

sf2 = Restaurant.create(name:"Piccino", address:"1001 Minnesota St", city_name:"San Francisco", state:"CA", zip:94107,
about:"When we opened the doors of our tiny restaurant in December 2006, our goal was to make Piccino as welcoming as the home of a close friend, our food as simple and beautifully executed as possible. We're honored that Piccino became a thriving hub of the community. In May of 2011, we moved from our original space into a new home (dubbed The Yellow Building) on the corner of 22nd & Minnesota Streets.

Our menu still features the classic and seasonally driven thin-crust pizzas and polpette Piccino is known for; our salads and soups use the finest organic produce sourced directly from small local farms. Piccino's menu has expanded to include more small starter plates, house-made pastas, contorni (vegetable sides), and special entrees of meat, fish, or poultry. Seasonal desserts and expertly made coffee complete our daily offerings.
",
image1:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501145527/sf2_ew7lux.jpg",
image2:"http://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501145515/sf2-1_nhq73d.jpg",
image3:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501145635/sf2-2_qrzxy4.jpg",
city_id: 1, cuisine: 2, price: 2, hours: 3, rate: 0, owner_id: 1)

sf3 = Restaurant.create(name:"Mourad", address:"140 New Montgomery St", city_name:"San Francisco", state:"CA", zip:94105,
about:"California-Moroccan follow up to Mourad Lahlou's Michelin starred Aziza, the menu highlights the culinary bounty
and influence of the Bay Area with inspiration rooted in traditional Moroccan cuisine. Mourad is located in the historic Pacific Bell building in San Francisco’s South of Market and Financial Districts. The contemporary design seamlessly blends the Art Deco building with steel accents for a setting that is both modern and inviting.",
image1:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501101701/sf3_nb5376.jpg",
image2:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501104363/sf3-2_zcmtek.jpg",
image3:"https://res.cloudinary.com/hobara/image/upload/c_scale,h_360,w_500/v1501104334/sf3-1_mwfzfv.jpg",
city_id: 1, cuisine: 10, price: 4, hours: 2, rate: 0, owner_id: 1)

sf4 = Restaurant.create(name:"25 Lusk", address:"25 Lusk St", city_name:"San Francisco", state:"CA", zip:94107,
about:"25 Lusk is a sophisticated, approachable fine dining restaurant specializing in seasonal contemporary American cuisine. All of the original exposed brick and massive timbers are still in place, creating a warm and inviting ambiance while maintaining the building's classic, industrial aesthetic.
The 9,800-square-foot space includes 120 seats in the main dining area, a spacious lower bar and lounge level, 30-35 seats in the private dining area, semi private dining for parties up to 14 people and a community dining table.
Perhaps the most unique element of the 25 Lusk transformations is the open space which allows soaring steel fire orb flues to pass from the main dining level to the lounge below. This design unifies the two-level space while still allowing each level to exist as a distinct venue. 25 Lusk's one-of-a-kind basement level bar and lounge offers a stylish and contemporary setting with an expansive selection of classic and modern cocktails.",
image1:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501103730/sf4_f0wi6v.jpg",
image2:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501103733/sf4-1_xbtl21.jpg",
image3:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501103730/sf4-2_xltmmp.jpg",
city_id: 1, cuisine: 1, price: 3, hours: 4, rate: 0, owner_id: 1)

sf5 = Restaurant.create(name:"Chaya Brasserie", address:"132 The Embarcadero", city_name:"San Francisco", state:"CA", zip:94105,
about:"Inspired by the flavors of Japan and the harvests of California, CHAYA Brasserie serves Contemporary Japanese food with strong New American/French influences set to sweeping views of the San Francisco Bay, Treasure Island and the Bay Bridge.",
image1:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501104783/sf5_jwszdu.jpg",
image2:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501104787/sf5-2_dxbv28.jpg",
image3:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501104784/sf5-1_fos3pw.jpg",
city_id: 1, cuisine: 5, price: 3, hours: 2, rate: 0, owner_id: 1)

sf6 = Restaurant.create(name:"Crustacean", address:"1475 Polk St", city_name:"San Francisco", state:"CA", zip:94109,
about:"Opened by the An family in 1991 following the success of their Vietnamese kitchen Thanh Long, Crustacean offers up-scale Euro-Asian fusion fare in an elegant fine dining setting. The menu follows Executive Chef Helene An's philosophy of turning fresh ingredients that are valued in Eastern medicine for their healing properties into simple, clean and refined dishes. Loyal customers have been returning for years for the secret family recipe for Garlic Noodles and Roasted Dungeness Crab. The sophisticated Asian decor in warm dark hues provides the appropriate setting to enjoy this homey yet sumptuous food. Located in the heart of Nob Hill, Crustacean also offers patio seating when weather permits. Dungeness crab & garlic noodles are highlights on the menu of this upscale, Indochina-themed venue.",
image1:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501115476/sf6_xkfcl9.jpg",
image2:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501105450/sf6-2_zzrewm.jpg",
image3:"http://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501115838/sf4-2_jjgxva.jpg",
city_id: 1, cuisine: 10, price: 3, hours: 1, rate: 0, owner_id: 1)

sf7 = Restaurant.create(name:"Hakkasan", address:"One Kearny Street", city_name:"San Francisco", state:"CA", zip:94108,
about:"Located in one of the most food-centric cities in the U.S., Hakkasan San Francisco has become a culinary destination for locals and tourists alike. Accessible yet sophisticated, Hakkasan has redefined the modern Chinese fine-dining experience. “Modern authenticity” is at the heart of everything from the design of its chic, sensuous interior to the execution of its Michelin-starred modern Cantonese menu, to an expansive wine and cocktail program, carefully curated by the talented Hakkasan mixologists.",
image1:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501105455/sf7_d778iw.jpg",
image2:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501105457/sf7-1_no6sgt.jpg",
image3:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501105460/sf7-2_hbneop.jpg",
city_id: 1, cuisine: 6, price: 4, hours: 4, rate: 0, owner_id: 1)



ny1 = Restaurant.create(name:"Grand Central Oyster Bar", address:"250 W 41st Street", city_name:"New York,", state:"NY", zip:10036,
about:"With 4 decades of experience, Wolfgang Zwiener didn't duplicate an exceptional steakhouse, he improved on it to make Wolfgang's Steakhouse exceptional. The porterhouse steak for one, two, four or more, is an outstanding choice. The atmosphere, expanded menu & professional service will appeal to even the most exacting diners. Wolfgang's is pleased to add this location in the heart of Midtown East.",
image1:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501110718/ny1_sna1ni.jpg",
image2:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501110719/ny1-1_up21i6.jpg",
image3:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501110722/ny1-2_kkcvxf.jpg",
city_id: 6, cuisine: 9, price: 3, hours: 1, rate: 0, owner_id: 1)

ny2 = Restaurant.create(name:"Wolfgang's Steak House", address:"Grand Central Terminal
89 E. 42nd St", city_name:"New York", state:"NY", zip:10017,
about:"A New York landmark with Guastivino tiled vaulted ceilings. There are two dining rooms open for reservations and walk-ins. The oyster bar, lounge, bar, and counter seating are open to first-come first-serve customers. There are 450 seats for you to choose from and we offer 25-30 varieties of the freshest oysters and seafood.",
image1:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501111283/ny2_imjs3v.jpg",
image2:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501111236/ny2-1_colgz5.jpg",
image3:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501111240/ny2-2_jujwnf.jpg",
city_id: 6, cuisine: 8, price: 4, hours: 4, rate: 0, owner_id: 1)

ny3 = Restaurant.create(name:"Spice Market", address:"403 West 13th Street", city_name:"New York", state:"NY", zip:10014,
about:"Spice Market is a regal and exotic restaurant that serves a variety of elevated Southeast Asian dishes. Jean-Georges Vongerichten runs the kitchen, where the food is inspired by traditional street foods found throughout Thailand and China. The restaurants interior is luxurious and ornate, designed in an oriental fashion. Spice Market is a great place to enjoy an intimate meal or celebrate a special occasion in a chic environment.
Begin the meal with appetizers like chicken samosas, Hamachi sashimi and lentil chips with tomato Indian jam. Stop in early for brunch and enjoy dishes like the lobster omelette with shrimp and kimchi relish, short rib hash and the Pandan waffle with banana coins and condensed milk. Lunch and dinner options include the steak entre, vegetable pad Thai and chicken satay. Finish the meal at Spice Market with a sweet dessert like biscuits with honey syrup or cassava cake.",
image1:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501111451/ny3_lbjlhf.jpg",
image2:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501111453/ny3-1_f5cuse.jpg",
image3:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501111456/ny3-2_scd4hj.jpg",
city_id: 6, cuisine: 7, price: 3, hours: 4, rate: 0, owner_id: 1)

ny4 = Restaurant.create(name:"Blend on the Water", address:"4540 Center Blvd
", city_name:"Long Island City", state:"NY", zip:11109,
about:"We are a Latin fusion restaurant, presenting authentic cuisine inspired by all Latin countries.
The Music, The Art, The Culture, The People, The Food. Blend is the ultimate dining experience.",
image1:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501115492/ny4_gxabz5.jpg",
image2:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501112143/ny4-1_ealrrd.jpg",
image3:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501112146/ny4-2_peovjx.jpg",
city_id: 6, cuisine: 4, price: 2, hours: 4, rate: 0, owner_id: 1)

ny5 = Restaurant.create(name:"Rebelle", address:"218 Bowery", city_name:"New York", state:"NY", zip:10012,
about:"Rebelle is a new contemporary restaurant inspired by our love of French food and wine, from the owners of Pearl & Ash and Chef Daniel Eddy.",
image1:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501112303/ny5_lhdylt.jpg",
image2:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501112306/ny5-1_akscvj.jpg",
image3:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501112308/ny5-2._c1ecjy.jpg",
city_id: 6, cuisine: 3, price: 3, hours: 1, rate: 0, owner_id: 1)

ny6 = Restaurant.create(name:"Basta Pasta", address:"37 W 17th St", city_name:"New York", state:"NY", zip:10011,
about:"
Basta Pasta was first established in Tokyo, Japan in 1985. The restaurant was designed with an open kitchen with the concept of having a cooking show in the restaurant. Customers enjoyed the entertainment and the course of food there. After some successful years in Tokyo, Basta Pasta NYC opened its door at the Chelsea location in 1990.
Chef Takada’s authentic, but still creative Italian dishes have been attracting and accepted by people from all over the world for over a decade.",
image1:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501113488/ny6_it7wzt.jpg",
image2:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501113490/ny6-1_w9ixjh.jpg",
image3:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501113491/ny6-2_tww7zx.jpg",
city_id: 6, cuisine: 5, price: 2, hours: 1, rate: 0, owner_id: 1)

ny7 = Restaurant.create(name:"Ippudo", address:"321 W 51st St", city_name:"New York", state:"NY", zip:10019,
about:"Japanese small plates, ramen & upmarket sake are dispatched in this simple but stylish outpost.
Embodying the original philosophy of the Ramen King and Ippudo founder Shigemi Kawahara, our second NYC based shop opened in Hell’s Kitchen in 2013 to “keep changing to remain unchanged.” Dishing-up the same signature Tonkotsu pork broth and premium house-made thin noodles that catapulted our East Village location into wide acclaim, Ippudo Westside brings another level of subtlety, refinement and depth to the flavor palette of our ramen and tapas-style dishes. Introducing our Buddhist-inspired Shojin - Ippudo’s first vegan and gluten-free ramen - monthly seasonal toppings and specialties as well as an extensive offering of unique and exciting sake, shochu and japanese liquor, Ippudo Westside aims to bring together the highest quality ramen, service, and libations. Stay tuned for our special events and tastings on our 2nd floor!",
image1:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501113779/ny7_w3otue.jpg",
image2:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501113781/ny7-1_rj114w.jpg",
image3:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501113783/ny7-2_evgvmq.jpg",
city_id: 6, cuisine: 5, price: 2, hours: 4, rate: 0, owner_id: 1)



dc1 = Restaurant.create(name:"The Palm Washington DC", address:"1225 19th Street N.W.", city_name:"Washington", state:"DC", zip:20036,
about:"Palm Restaurant...The Classic American Steak House is renowned for its USDA prime aged steaks, jumbo Nova Scotia lobsters, Italian dishes, the freshest of seafood, warm smiles, outstanding service and an atmosphere like nowhere else. If you can't find your representative on Capitol Hill, you better check Palm Restaurant in Washington DC. Since 1972, Palm Restaurant has built a loyal guest base made up of the who's who of Washington, including the political elite, the city's socialites, power brokers and media personalities such as Tucker Carlson and Bob Schieffer who can also be seen among the hordes of loyal Palm Restaurant guests. ",
image1:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501118132/dc1_awnmcl.jpg",
image2:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501118140/dc1-1_xqo9qb.jpg",
image3:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501118143/dc1-2_durxky.jpg",
city_id: 7, cuisine: 8, price: 4, hours: 2, rate: 0, owner_id: 1)

dc2 = Restaurant.create(name:"Centrolina", address:"1225 19th Street N.W.", city_name:"Washington", state:"DC", zip:20036,
about:"Centrolina is an Italian restaurant and market, locally owned and operated by Chef Amy Brandwein, set in Washington’s new CityCenterDC development. The Osteria showcases a seasonal, daily changing menu of authentic and innovative Italian dishes offered for lunch and dinner daily. Chef Brandwein's menu is inspired from the seasons, Italian regionality and the wide variety of Chef curated product in the adjoining market.
The market showcases a selection of imported Italian specialty items along with locally sourced meat, sustainable fish, and produce from local farms. The Centrolina kitchen produces daily hand crafted fresh pasta and sauces, antipasti and entrees available for takeaway. The Centrolina bakery offers a daily changing array of biscotti, crostata and cakes in addition to locally made bread from Bread Furst and a full service Barista bar featuring Vigilante coffee.",
image1:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501118147/dc2_bsfgyo.jpg",
image2:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501118151/dc2-1_tx85ra.jpg",
image3:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501118154/dc2-2_uk1ub3.jpg",
city_id: 7, cuisine: 2, price: 2, hours: 2, rate: 0, owner_id: 1)



la1 = Restaurant.create(name:"Mercado", address:"7910 West 3rd Street", city_name:"Los Angeles", state:"CA", zip:90048,
about:"Mercado on 3rd St. is the 2nd location for partners Jesse Gomez and Executive Chef Jose Acevedo. The restaurant is an inventive mix of food, atmosphere and tradition, reflecting the heart & soul of new Mexican dining. The restaurant is set up as several different spaces, with the main dining area as a covered patio space that looks out to 3rd street for a beautiful view. The open air bar is a relaxing way to enjoy a cocktail and food. The menu exemplifies the cuisine and flavor of the partners Mexican roots, featuring items such as Chef Acevedo's signature Carnitas, created from a recipe handed down through generations. With tortillas made by hand, the finest meats, poultry and seafood, flavorful sauces, enchiladas and tacos, produce from the local farmers' market, and everything made from the freshest ingredients, Mercado offers handcrafted cuisine, artful design, warm atmosphere and service that is both friendly and informed to guide each guest through the dining experience.",
image1:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501118188/la1_ert3gt.jpg",
image2:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501118191/la1-1_xc22wb.jpg",
image3:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501118195/la1-2_wysgxr.jpg",
city_id: 2, cuisine: 4, price: 2, hours: 2, rate: 0, owner_id: 1)

la2 = Restaurant.create(name:"Mendocino Farms", address:"175 S Fairfax Ave B", city_name:"Los Angeles", state:"CA", zip:90048,
about:"Creative gourmet sandwiches, soups & salads, made with local & seasonal ingredients.",
image1:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501118212/la2_imzd1m.jpg",
image2:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501140591/la2-1_cnyzjb.jpg",
image3:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501140638/la2-2_ozxqp9.jpg",
city_id: 2, cuisine: 1, price: 1, hours: 2, rate: 0, owner_id: 1)



ch1 = Restaurant.create(name:"Green Street Smoked Meats
", address:"112 N Green St", city_name:"Chicago", state:"IL", zip:60607,
about:"Hip counter serve dishing house-smoked Texas BBQ & homey sides in woodsy, warehouselike digs.",
image1:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501119050/ch1_jpmvz7.jpg",
image2:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501119052/ch1-1_dtkpvj.jpg",
image3:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501119053/ch1-2_ubjtwu.jpg",
city_id: 4, cuisine: 1, price: 2, hours: 4, rate: 0, owner_id: 1)

ch2 = Restaurant.create(name:"UMAI", address:"730 South Clark", city_name:"Chicago", state:"IL", zip:60605,
about:"At Umai, the experience is meant to be a series of sensations to be shared and lingered over, whether it’s a cozy meal for a few or a lively evening out. The interior of Umai has a modern-lofty feel with an artistic decor of Japanese mural on the wall. The dining room has natural earthy color, dark high-ceiling and hanging lights that makes the dinning elevated, warm and hip atmosphere, providing an intimate and fun dining experience for any occasion.
At the sushi bar, our expert chefs work their magic, creating a dynamic and interactive dining experience where guests can savor either the sushi or the full menu.
Umai's kitchen is a laboratory for innovation. The chefs integrate classic Japanese techniques with international flavors to create stunning, mouth-watering bites for an eclectic crowd. From seasonal exotic fish, to an excellent sake and wine list, Umai is a promising destination for all to enjoy and share.",
image1:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501119591/ch2_hhtp2n.jpg",
image2:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501119592/ch2-1_s6cray.jpg",
image3:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501119595/ch2-2_hiwlad.jpg",
city_id: 4, cuisine: 5, price: 2, hours: 2, rate: 0, owner_id: 1)



au1 = Restaurant.create(name:"South Congress Cafe
", address:"1600 S Congress Ave", city_name:"Austin", state:"TX", zip:78704,
about:"The South Congress Café emerged in 2003, influenced by a new generation of local artists and fare. Our restaurant reflects how we feel about our food. We keep our roots in what works in the past while always striving to challenge ourselves with new ideas. Our building was originally a drug store built in the 1940's. To preserve the charm and history of old Austin we showcase the original brick structure in our bar, but also have kept it up to date with modern architectural details. Let us show you how we can offer you a great value and still be creative and progressive.",
image1:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501144374/au1_ye08mt.jpg",
image2:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501144474/au1-2_endb79.jpg",
image3:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501144517/au1-1_erw7vk.jpg",
city_id: 5, cuisine: 1, price: 2, hours: 2, rate: 0, owner_id: 1)

au2 = Restaurant.create(name:"Uchi", address:"801 S Lamar Blvd", city_name:"Austin", state:"TX", zip:78704,
about:"We are proud to announce... Chef Tyson Cole, winner of the 2011 James Beard Foundation Award for Best Chef Southwest--Thank you Uchi and Uchiko family and friends for your support!
Uchi showcases the culinary talents of executive chef and sushi master Tyson Cole, winner of the best new chef in America 2005 by Food and Wine magazine. His exciting menu expands on the Japanese tradition with new flavors and influences. Uchi means house and like many sushi bars in Japan, Uchi is located in a refurbished old home. Its vibrant design adds a fresh dimension to the neighborhood and has been warmly received by Austin's diverse dining crowd. Uchi accepts a very limited number of reservations and reserves the majority of the dining room for walk-in availability. Most seating is done on a first-come, first-serve basis. All parties must be complete before being seated.",
image1:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501121822/au3_fv44ey.jpg",
image2:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501121824/au3-1_qzg9mt.jpg",
image3:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501121826/au3-2_a7ub8d.jpg",
city_id: 5, cuisine: 5, price: 3, hours: 4, rate: 0, owner_id: 1)

au3 = Restaurant.create(name:"The Salty Sow", address:"1917 Manor Rd", city_name:"Austin", state:"TX", zip:78722,
about:"Love SWINE+Wine+BEER? From the creators of Eddie V's, Roaring Fork & Hopdoddy, Larry Foles & Guy Villavosa brings you Salty Sow. The culinary force of Chef Harold Marmulstein & Chef Nox Ybarra are together at Austin's premier head to tail restaurant. Salty Sow serves modern farmhouse cuisine, combining new cooking techniques with old-world methods like braising, poaching, and stewing. Our signature cocktail ingredients come fresh out of the garden, featuring local and organic spirits. Founded by long-time food lovers, we take special care to prepare everything we serve from scratch and by hand daily.",
image1:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501120695/au2_b1zayp.jpg",
image2:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501120695/au2-1_yd39rk.jpg",
image3:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501120696/au2-2_g4gqka.png",
city_id: 5, cuisine: 1, price: 2, hours: 4, rate: 0, owner_id: 1)



lo1 = Restaurant.create(name:"Clos Maggiore", address:"33 King Street", city_name:"London", state:"WC2E 8JD", zip:0,
about:"Clos Maggiore is an oasis of calm in the heart of Covent Garden. Influenced by the stylish country inns of Provence and Tuscany its unique interiors create a warmth and intimacy enjoyed by both business and private parties. The conservatory has a fully retractable glass roof creating a bright and airy dining space, particularly lovely during the Spring and Summer seasons. It is transformed at night by candles, starlight and a crackling fire during the Winter months. Head Chef Marcellin Marc cooks sublime Provençal inspired cuisine with contemporary panache. Marcellin is committed to using locally sourced seasonal ingredients to create perfectly balanced menus which were awarded three AA-rosettes since 2008. Our extensive cellar at Clos Maggiore includes over 2,000 labels and was extended earlier this year to include an additional 400 wines at a low – mid price range. We are very proud to have been awarded the Best of Award of Excellence consistently since 2003 by Wine Spectator.",
image1:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501122772/lo1_brgogy.jpg",
image2:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501122801/lo1-1_ncm1uz.jpg",
image3:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501122774/lo1-2_oyppt5.jpg",
city_id: 3, cuisine: 3, price: 3, hours: 2, rate: 0, owner_id: 1)

lo2 = Restaurant.create(name:"Murakami", address:"63 - 66 St Martins Lane", city_name:"London", state:"WC2N 4JS", zip:0,
about:"Murakami - a beautifully designed modern Japanese restaurant and sushi bar.
Great value, contemporary Japanese dining experience in the heart of London on St Martin's Lane.
A cocktail menu focused with the infusion of Sake, classic cocktails also available.
A good selection of Japanese Whiskeys and Sake is also available.",
image1:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501123405/lo2_wmuwix.jpg",
image2:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501123411/lo2-2_dbaycm.jpg",
image3:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501123407/lo2-1_vdabyd.jpg",
city_id: 3, cuisine: 5, price: 2, hours: 3, rate: 0, owner_id: 1)



to1 = Restaurant.create(name:"The Chase Fish & Oyster", address:"10 Temperance St.", city_name:"Toronto", state:"ON M5H 1Y5", zip:0,
about:"The Chase Fish and Oyster represents our pursuit for the finest quality seafood with a strong focus and philosophy on sustainability and seasonal ingredients. Our culinary culture is formed by the great Eastern Maritime regions of Canada and the United States with influences from various coastal regions around the globe. Driven by creative presentations, our innovative menu of Hot and Cold dishes will always highlight the natural tastes of seafood. The room is casual and warm and the service is detailed but humbled, our focus is to offer an oceanic escape with every experience.",
image1:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501123442/to1_hxmwrm.jpg",
image2:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501123444/to1-2_q6yz56.jpg",
image3:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501123447/to1-1_ld8yiv.jpg",
city_id: 8, cuisine: 9, price: 3, hours: 3, rate: 0, owner_id: 1)

to2 = Restaurant.create(name:"Woods Restaurant & Bar", address:"45 Colborne Street", city_name:"Toronto", state:"M5E 1E3", zip:0,
about:"A truly Canadian experience showcasing superb Canadian wines, food, and hospitality. As elegant as it is natural, Woods Restaurant serves up seasonal, sustainable local ingredients in a space that is authentically rustic chic yet modern and beautifully lit. We bring the the landscape of the Canadian woods to your dining table. After dinner continue your experience with us at Pravda Vodka Bar. Ask for details.",
image1:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501123450/to2_sezt0y.jpg",
image2:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501141320/to2-1_javs9f.jpg",
image3:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501141324/to2-2_hwzmud.jpg",
city_id: 8, cuisine: 10, price: 3, hours: 2, rate: 0, owner_id: 1)



pr1 = Restaurant.create(name:"Restaurant Le Hangar", address:"12 Impasse Berthaud", city_name:"Paris", state:"France", zip:75003,
about:"All-day dining in the lobby, perfect for a wide range of situations. The lively open kitchen, the 50-seater terrace overlooking the garden, a great combination which enhances the local food scene.",
image1:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501138526/pr1_zdr3mt.jpg",
image2:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501138578/pr1-1_p5zagu.jpg",
image3:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501138508/pr1-2_hhsktv.jpg",
city_id: 9, cuisine: 3, price: 2, hours: 2, rate: 0, owner_id: 1)

pr2 = Restaurant.create(name:"Nanashi", address:"57 Rue Charlot", city_name:"Paris", state:"France", zip:75003,
about:"Nanashi is for healthy bento lovers.
Bento is this famous Japanese box-shaped container filled with rice, meat or fish (or veggie/vegan) and vegetables. And at Nanashi, a trendsetting Japanese kitchen in Le Marais district, loved by the trendy locals, in a colorful neo-industrial setting, bentos are delicious. So are their sobas (Japanese noodles) and their spring rolls.",
image1:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501138501/pr2_k6ai64.jpg",
image2:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501138501/pr2-1_o4bwjf.jpg",
image3:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501138503/pr2-2_gr7luy.jpg",
city_id: 9, cuisine: 5, price: 2, hours: 4, rate: 0, owner_id: 1)



sg1 = Restaurant.create(name:"Din Tai Fung", address:"252 North Bridge Rd", city_name:"Singapore", state:"Singapore", zip:179103,
about:"Ranked as one of the world’s Top Ten Best Restaurants by The New York Times, Din Tai Fung has its roots dating back to Taiwan 40 years ago. With its famous signature xiao long baos (steamed pork dumplings) and heart-warming steamed chicken soup, this authentic Taiwanese restaurant has been making waves with branches throughout the world, including Taiwan, Singapore, Thailand, Australia, China, Hong Kong, Indonesia, Japan, Malaysia, Philippines, South Korea, UAE, USA.
Xiao Long Bao
Din Tai Fung’s cuisine is all about harmony. Utilising the freshest ingredients paired with a relish for simple cooking styles, the recipe selection is never too rich or heavy on the palate, and is a fresh welcome given the increasing preference for healthy cooking. With a wide selection of enticing dishes, diners are destined to tuck into flavourful creations that burst into delight with each and every bite.",
image1:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501126576/sg1_o9fftm.jpg",
image2:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501126452/sg1-3_lmrexj.jpg",
image3:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501126462/sg1-2_ngk30x.jpg",
city_id: 10, cuisine: 6, price: 2, hours: 2, rate: 0, owner_id: 1)

sg2 = Restaurant.create(name:"Takumi", address:"2 Keppel Bay Vista", city_name:"Singapore", state:"Singapore", zip:98382,
about:"At Takumi, a fun showcase of Japanese cuisine with a focus on impeccable craftsmanship awaits all diners. Experience Japan from the ambience right down to the finest details of the ingredients. The freshest seasonal gourmet ingredients are sourced from local farms and ports throughout Japan, and served up with a medley of the chefs’ Japanese flair and indulge in the generous Japanese hospitality of Takumi.",
image1:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501126419/sg2_r6rzhi.jpg",
image2:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501126420/sg2-1_raben3.jpg",
image3:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501126421/sg2-2_v0oavt.jpg",
city_id: 10, cuisine: 5, price: 3, hours: 2, rate: 0, owner_id: 1)



ty1 = Restaurant.create(name:"Akasaka Tsutsui", address:"2 Chome−22−24, Akasaka, Minato-ku", city_name:"Tokyo", state:"Japan", zip:1070052,
about:"This restaurant has been a favourite for 61 years, ever since it was founded by Koso Tsutsui, who perfected the famous beef steak bowl and other types of “western” food eaten with chopsticks. This is the best of “Japanese Western food” diligently prepared using carefully selected ingredients. A perfect fusion of the spirit of Japan and the skills of the West.",
image1:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501138584/ty1_esg3wj.jpg",
image2:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501138589/ty1-1_fnhbuq.jpg",
image3:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501138602/ty1-3_qdcadj.jpg",
city_id: 11, cuisine: 5, price: 3, hours: 1, rate: 0, owner_id: 1)

ty2 = Restaurant.create(name:"The Oak Door", address:"2 Chome−22−24, Akasaka, Minato-ku", city_name:"Tokyo", state:"Japan", zip:1070052,
about:"Enjoy perfectly-cooked dishes paired with New World wines
in this elegant steakhouse that has a vibrant open kitchen,
intimate booth and outdoor terrace seating,
a lively bar and a luxurious private dining room.",
image1:"http://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501139557/ty2_bofybf.jpg",
image2:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501138632/ty2-1_v5w3kc.jpg",
image3:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501138637/ty2-2_pp3ity.jpg",
city_id: 11, cuisine: 8, price: 4, hours: 3, rate: 0, owner_id: 1)

ty3 = Restaurant.create(name:"Bulgari Tokyo Restaurant", address:"2-7-12, Ginza
Bulgari Ginza Tower, Chuo-ku", city_name:"Tokyo", state:"Japan", zip:1040061,
about:"Bulgari Il Ristorante is an Italian restaurant serving the traditional cuisine of the region. It is of the utmost importance to the kitchen staff here to deliver genuine Italian fare, and so most of Bulgari Il Ristorante's ingredients are imported from places like Naples and Rome. To supplement these Italian ingredients, Bulgari Il Ristorante blends in local flavors and cooking styles to create a unique Japanese/Italian fusion menu. Some of the most popular items on Bulgari Il Ristorante's menu include cooked whole octopus and charcuterie platters that feature meats and cheeses like mortadella and soprasetta.",
image1:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501138644/ty3_tzwu72.jpg",
image2:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501138649/ty3-1_ldxi1z.jpg",
image3:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501138657/ty3-3_uou2ra.jpg",
city_id: 11, cuisine: 2, price: 4, hours: 1, rate: 0, owner_id: 1)

ty4 = Restaurant.create(name:"Grand Kitchen", address:"1-1-1 Marunouchi
Palace Hotel, Chiyoda-ku", city_name:"Tokyo", state:"Japan", zip:1000005,
about:"All-day dining in the lobby, perfect for a wide range of situations. The lively open kitchen, the 50-seater terrace overlooking the garden, a great combination which enhances the local food scene.",
image1:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501138662/ty4_of28ht.jpg",
image2:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501138670/ty4-2_hlc04o.jpg",
image3:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501138673/ty4-1_caqsoj.jpg",
city_id: 11, cuisine: 1, price: 3, hours: 4, rate: 0, owner_id: 1)

ty5 = Restaurant.create(name:"Tempura Tsunahachi", address:"3 Chome−31, Shinjuku, Shinjuku-ku", city_name:"Tokyo", state:"Japan", zip:1600022,
about:"All-day dining in the lobby, perfect for a wide range of situations. The lively open kitchen, the 50-seater terrace overlooking the garden, a great combination which enhances the local food scene.",
image1:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501138679/ty5_gqabnt.jpg",
image2:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501138689/ty5-2_wvvyxt.jpg",
image3:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501138684/ty5-1_zjqs2v.jpg",
city_id: 11, cuisine: 5, price: 2, hours: 2, rate: 0, owner_id: 1)



os1 = Restaurant.create(name:"Kushikatsu Daruma", address:"1 Chome-6-8 Ebisuhigashi, Naniwa-ku", city_name:"Osaka", state:"Japan", zip:5560002,
about:"This is Kushikatsu Daruma, popular in Shinsekai in Osaka. Our kushikatsu have three flavors. These are original sauce, coating and good oil. They make kushikatsu so tasty. You can use sauce only one time per a skewer. You can enjoy original kushikatsu taste if you put enough sauce on your kushikatsu. Once you eat it, you will love it. We have been popular with kushikatsu since 1929 we opened this restaurant.",
image1:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501128331/os1_bpx8bs.jpg",
image2:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501128295/so1-1_jgpwco.jpg",
image3:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501143280/os1-2_eh7bf3.jpg",
city_id: 12, cuisine: 5, price: 2, hours: 1, rate: 0, owner_id: 1)

os2 = Restaurant.create(name:"551 Horai", address:"3 Chome−6−３, Nanba, Chuo-ku", city_name:"Osaka", state:"Japan", zip:5420076,
about:"551 Horai is one of the most popular barbecue pork bun stores in Osaka, selling more than 110,000 buns every day. Buns consist of diced pork and minced onion encased in a sweet, white bun, and are handmade in front of customers. Two can be bought for ￥320. During summer, ice candy is on sale at ￥105 each bar.",
image1:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501128275/os2_j0c0os.jpg",
image2:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501128284/os2-2_nehmzv.jpg",
image3:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501128280/os2-1_wn3lys.jpg",
city_id: 12, cuisine: 5, price: 1, hours: 1, rate: 0, owner_id: 1)

os3 = Restaurant.create(name:"Okonomiyaki Chitose", address:"1 Chome-11-10 Taishi, Nishinari-ku", city_name:"Osaka", state:"Japan", zip:5570002,
about:"THIS IS A DISCRETE LITTLE ESTABLISHMENT, WITH ONE OF THOSE BIG WHITE AIR CONDITIONING UNITS NEXT TO A SLIDING WOODEN DOOR, BUT DON'T BE DECEIVED, YOU HAVE COME TO ONE OF THE BEST OKONOMIYAKI RESTAURANTS IN OSAKA!

Expertly prepared, topped with whatever you want - in fact the term okonomiyaki literally means 'whatever you want' this kind of Japanese pancake is adapted to your every desire and is cooked right in front of you by a cheerful team that know their job like the back of their hand or should we say spatula! Okonomiyaki are indeed cut with a sort of metal scraper.

Cheese, different kinds of fish, shrimp, squid... the secret of the restaurant is to find the right balance between the filling and the egg mixture, and to top it all with a slightly sweet, brown sauce, dried bonito shavings (katsuobushi), grated algae (aonori) and mayonnaise. The Osaka okonomiyaki use yams in the egg preparation and garnish them with seafood such as octopus or squid..",
image1:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501128757/os3_zkjwcf.jpg",
image2:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501128758/os3-1_hhsno6.jpg",
image3:"https://res.cloudinary.com/hobara/image/upload/c_scale,w_500/v1501139226/os3-3_vaz17i.jpg",
city_id: 12, cuisine: 5, price: 1, hours: 1, rate: 0, owner_id: 1)
