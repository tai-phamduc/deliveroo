const MONGODB_URI = "mongodb+srv://admin:123@supportdesk.ergkcm6.mongodb.net/?retryWrites=true&w=majority&appName=supportdesk"
db.categories.insertMany([
  {
    _id: 1,
    name: "Thai",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Yam_wun_sen.JPG"
  },
  {
    _id: 2,
    name: "Italian",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/59/Spaghetti_vongole_2.jpg"
  },
  {
    _id: 3,
    name: "Mexican",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Chile_Rellenos.jpg/1280px-Chile_Rellenos.jpg"
  },
  {
    _id: 4,
    name: "Japanese",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/090906_yakiniku.jpg/1024px-090906_yakiniku.jpg"
  },
  {
    _id: 5,
    name: "Indian",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/090906_yakiniku.jpg/1024px-090906_yakiniku.jpg"
  }
]);

db.features.insertMany([
  {
    _id: "*",
    name: "Top Rated",
    shortDescription: "Explore the highest-rated restaurants in your area"
  },
  {
    _id: "**",
    name: "Free Delivery",
    shortDescription: "Enjoy meals from places that offer free delivery"
  },
  {
    _id: "***",
    name: "Family Friendly",
    shortDescription: "Perfect spots for a family dinner"
  }
])

db.restaurants.insertMany([
  {
    _id: "A",
    name: "Thai Delight",
    shortDescription: "Authentic Thai cuisine",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YorkUThaiExpress.JPG/1280px-YorkUThaiExpress.JPG",
    lat: 13.7563,
    long: 100.5018,
    address: "123 Bangkok St, Bangkok, Thailand",
    rating: 4.5,
    categoryId: 1, 
    featureId: "*"
  },
  {
    _id: "B",
    name: "Italian Bistro",
    shortDescription: "Delicious Italian dishes",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Bella_Italia%2C_Briggate%2C_Leeds_%2824th_June_2010%29.jpg/1280px-Bella_Italia%2C_Briggate%2C_Leeds_%2824th_June_2010%29.jpg",
    lat: 41.9028,
    long: 12.4964,
    address: "456 Rome Rd, Rome, Italy",
    rating: 4.7,
    categoryId: 2,
    featureId: "**"
  },
  {
    _id: "C",
    name: "Mexican Fiesta",
    shortDescription: "Traditional Mexican flavors",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Boca_Grande%2C_Cambridge_MA.jpg",
    lat: 19.4326,
    long: -99.1332,
    address: "789 Mexico City Blvd, Mexico City, Mexico",
    rating: 4.6,
    categoryId: 3,
    featureId: "***"
  },
  {
    _id: "D",
    name: "Sushi World",
    shortDescription: "Fresh sushi and sashimi",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Northeast_Portland%2C_Oregon_%282019%29_-_062.jpg/1280px-Northeast_Portland%2C_Oregon_%282019%29_-_062.jpg",
    lat: 35.6895,
    long: 139.6917,
    address: "101 Tokyo St, Tokyo, Japan",
    rating: 4.8,
    categoryId: 4,
    featureId: "*"
  },
  {
    _id: "E",
    name: "Curry House",
    shortDescription: "Spicy and flavorful Indian cuisine",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Pakkahuoneenkatu_9B_Oulu_20181226.jpg/1280px-Pakkahuoneenkatu_9B_Oulu_20181226.jpg",
    lat: 28.6139,
    long: 77.2090,
    address: "202 New Delhi Rd, New Delhi, India",
    rating: 4.7,
    categoryId: 5,
    featureId: "**"
  },
  {
    _id: "F",
    name: "Burger Haven",
    shortDescription: "Gourmet burgers and fries",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Portland%2C_Oregon_%28August_27%2C_2022%29_-_012.jpg/1280px-Portland%2C_Oregon_%28August_27%2C_2022%29_-_012.jpg",
    lat: 40.7128,
    long: -74.0060,
    address: "300 New York Ave, New York, USA",
    rating: 4.3,
    categoryId: 1,
    featureId: "***"
  },
  {
    _id: "G",
    name: "French Delight",
    shortDescription: "Fine French dining experience",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Le_Panier%2C_Seattle_%282022%29_-_02.jpg/1280px-Le_Panier%2C_Seattle_%282022%29_-_02.jpg",
    lat: 48.8566,
    long: 2.3522,
    address: "400 Paris St, Paris, France",
    rating: 4.9,
    categoryId: 1,
    featureId: "*"
  },
  {
    _id: "H",
    name: "Kebab Kingdom",
    shortDescription: "Middle Eastern cuisine",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Interior_of_Le_Bernardin.jpg",
    lat: 25.276987,
    long: 55.296249,
    address: "500 Dubai Rd, Dubai, UAE",
    rating: 4.6,
    categoryId: 1,
    featureId: "**"
  },
  {
    _id: "I",
    name: "Seafood Shack",
    shortDescription: "Fresh seafood and more",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/L%27Espalier%2C_Boston_MA.jpg/1280px-L%27Espalier%2C_Boston_MA.jpg",
    lat: 37.7749,
    long: -122.4194,
    address: "600 San Francisco Blvd, San Francisco, USA",
    rating: 4.7,
    categoryId: 1,
    featureId: "***"
  },
  {
    _id: "J",
    name: "Vegan Paradise",
    shortDescription: "Healthy and delicious vegan meals",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/2009-0228-NOLA-004-Galatoires.jpg/1280px-2009-0228-NOLA-004-Galatoires.jpg",
    lat: 34.0522,
    long: -118.2437,
    address: "700 Los Angeles Rd, Los Angeles, USA",
    rating: 4.8,
    categoryId: 2,
    featureId: "*"
  }
]);


db.dishes.insertMany([
  {
    name: "Pad Thai",
    shortDescription: "Classic Thai noodle dish with shrimp, peanuts, and lime",
    price: 12.99,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Phat_Thai_kung_Chang_Khien_street_stall.jpg/1024px-Phat_Thai_kung_Chang_Khien_street_stall.jpg",
    restaurantId: "A"
  },
  {
    name: "Margherita Pizza",
    shortDescription: "Fresh mozzarella, tomatoes, and basil on a thin crust",
    price: 9.99,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Phat_Thai_kung_Chang_Khien_street_stall.jpg/1024px-Phat_Thai_kung_Chang_Khien_street_stall.jpg",
    restaurantId: "B"
  },
  {
    name: "Tacos Al Pastor",
    shortDescription: "Corn tortillas filled with marinated pork and pineapple",
    price: 7.99,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Phat_Thai_kung_Chang_Khien_street_stall.jpg/1024px-Phat_Thai_kung_Chang_Khien_street_stall.jpg",
    restaurantId: "C"
  },
  {
    name: "Sushi Platter",
    shortDescription: "Assorted fresh sushi and sashimi",
    price: 19.99,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Phat_Thai_kung_Chang_Khien_street_stall.jpg/1024px-Phat_Thai_kung_Chang_Khien_street_stall.jpg",
    restaurantId: "D"
  },
  {
    name: "Butter Chicken",
    shortDescription: "Tender chicken in a creamy tomato sauce",
    price: 13.99,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Phat_Thai_kung_Chang_Khien_street_stall.jpg/1024px-Phat_Thai_kung_Chang_Khien_street_stall.jpg",
    restaurantId: "E"
  },
  {
    name: "Cheeseburger",
    shortDescription: "Juicy beef patty with cheddar cheese, lettuce, and tomato",
    price: 10.99,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Phat_Thai_kung_Chang_Khien_street_stall.jpg/1024px-Phat_Thai_kung_Chang_Khien_street_stall.jpg",
    restaurantId: "F"
  },
  {
    name: "Croissant",
    shortDescription: "Buttery, flaky French pastry",
    price: 3.99,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Phat_Thai_kung_Chang_Khien_street_stall.jpg/1024px-Phat_Thai_kung_Chang_Khien_street_stall.jpg",
    restaurantId: "G"
  },
  {
    name: "Falafel Wrap",
    shortDescription: "Crispy falafel with fresh vegetables and tahini sauce",
    price: 8.99,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Phat_Thai_kung_Chang_Khien_street_stall.jpg/1024px-Phat_Thai_kung_Chang_Khien_street_stall.jpg",
    restaurantId: "H"
  },
  {
    name: "Grilled Salmon",
    shortDescription: "Freshly grilled salmon with a lemon butter sauce",
    price: 18.99,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Phat_Thai_kung_Chang_Khien_street_stall.jpg/1024px-Phat_Thai_kung_Chang_Khien_street_stall.jpg",
    restaurantId: "I"
  },
  {
    name: "Vegan Burrito",
    shortDescription: "Stuffed with rice, beans, and avocado",
    price: 11.99,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Phat_Thai_kung_Chang_Khien_street_stall.jpg/1024px-Phat_Thai_kung_Chang_Khien_street_stall.jpg",
    restaurantId: "J"
  },
  {
    name: "Green Curry",
    shortDescription: "Spicy green curry with chicken and vegetables",
    price: 14.99,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Thai_green_chicken_curry_and_roti.jpg/1280px-Thai_green_chicken_curry_and_roti.jpg",
    restaurantId: "A"
  },
  {
    name: "Spaghetti Carbonara",
    shortDescription: "Classic Italian pasta with pancetta and Parmesan",
    price: 11.99,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Thai_green_chicken_curry_and_roti.jpg/1280px-Thai_green_chicken_curry_and_roti.jpg",
    restaurantId: "B"
  },
  {
    name: "Chiles Rellenos",
    shortDescription: "Poblano peppers stuffed with cheese and meat",
    price: 12.99,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Thai_green_chicken_curry_and_roti.jpg/1280px-Thai_green_chicken_curry_and_roti.jpg",
    restaurantId: "C"
  },
  {
    name: "Tempura",
    shortDescription: "Lightly battered and fried seafood and vegetables",
    price: 15.99,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Thai_green_chicken_curry_and_roti.jpg/1280px-Thai_green_chicken_curry_and_roti.jpg",
    restaurantId: "D"
  },
  {
    name: "Naan",
    shortDescription: "Soft and fluffy Indian flatbread",
    price: 2.99,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Thai_green_chicken_curry_and_roti.jpg/1280px-Thai_green_chicken_curry_and_roti.jpg",
    restaurantId: "E"
  },
  {
    name: "Pulled Pork Sandwich",
    shortDescription: "Slow-cooked pulled pork with BBQ sauce",
    price: 9.99,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Thai_green_chicken_curry_and_roti.jpg/1280px-Thai_green_chicken_curry_and_roti.jpg",
    restaurantId: "F"
  },
  {
    name: "Quiche Lorraine",
    shortDescription: "Savory French tart with bacon and cheese",
    price: 8.99,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Thai_green_chicken_curry_and_roti.jpg/1280px-Thai_green_chicken_curry_and_roti.jpg",
    restaurantId: "G"
  },
  {
    name: "Hummus Plate",
    shortDescription: "Creamy hummus served with pita bread",
    price: 7.99,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Thai_green_chicken_curry_and_roti.jpg/1280px-Thai_green_chicken_curry_and_roti.jpg",
    restaurantId: "H"
  },
  {
    name: "Clam Chowder",
    shortDescription: "Rich and creamy New England clam chowder",
    price: 6.99,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Thai_green_chicken_curry_and_roti.jpg/1280px-Thai_green_chicken_curry_and_roti.jpg",
    restaurantId: "I"
  },
  {
    name: "Vegan Pad Thai",
    shortDescription: "Stir-fried rice noodles with tofu and vegetables",
    price: 12.99,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Thai_green_chicken_curry_and_roti.jpg/1280px-Thai_green_chicken_curry_and_roti.jpg",
    restaurantId: "J"
  }
]);
