const express = require("express")
const app = express()
const asyncHandler = require("express-async-handler")
const mongoose = require("mongoose")


mongoose
  .connect("mongodb+srv://admin:123@supportdesk.ergkcm6.mongodb.net/restaurant-management?retryWrites=true&w=majority&appName=supportdesk")
  .then(() => console.log("MongoDB connected"))
  .catch(() => console.log("Can not connect to mongodb"))

const Category = mongoose.model('Category', new mongoose.Schema({
  _id: { type: Number, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true }
}));

const Feature = mongoose.model('Feature', new mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  shortDescription: { type: String, required: true }
}));

const Restaurant = mongoose.model('Restaurant', new mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  shortDescription: { type: String, required: true },
  image: { type: String, required: true },
  lat: { type: Number, required: true },
  long: { type: Number, required: true },
  address: { type: String, required: true },
  rating: { type: Number, required: true },
  categoryId: { type: Number, ref: 'Category', required: true },
  featureId: { type: String, ref: 'Feature', required: true }
}));

const Dish = mongoose.model('Dish', new mongoose.Schema({
  name: { type: String, required: true },
  shortDescription: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  restaurantId: { type: String, ref: 'Restaurant', required: true }
}));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/*
  GET /api/categories
  GET /api/restaurants?category=something
  GET /api/restaurants/:restaurantId
  GET /api/restaurants/:restaurantId/dishes
*/

app.get("/api/categories", asyncHandler(async (req, res) => {
  const categories = await Category.find()
  res.json(categories)
}))

app.get("/api/restaurants", asyncHandler(async (req, res) => {
  const { category } = req.query
  if (category) {
    const restaurants = await Restaurant.aggregate([
      {
        $lookup: {
          from: "categories",
          localField: "categoryId",
          foreignField: "_id",
          as: "categories"
        }
      },
      {
        $unwind: "$categories"
      },
      {
        $match: {
          "categories.name": category
        }
      },
      {
        $project: {
          categories: 0
        }
      }
    ])
    res.json(restaurants)
  }
  const restaurants = await Restaurant.find()
  res.json(restaurants)
}))

app.get("/api/restaurants/:restaurantId", asyncHandler(async (req, res) => {
  const { restaurantId } = req.params
  const restaurant = await Restaurant.findById(restaurantId)
  res.json(restaurant)
}))

app.get("/api/restaurants/:restaurantId/dishes", asyncHandler(async (req, res) => {
  const { restaurantId } = req.params
  const dishes = await Dish.find({ restaurantId })
  res.json(dishes)
}))

app.use((err, req, res, next) => {
  res.json({ message: err.message || "Something went wrong" })
})

app.listen(5000, () => console.log("Server has been started at port 5000"))

module.exports = app