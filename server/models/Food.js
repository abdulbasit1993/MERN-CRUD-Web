const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
  foodName: {
    type: String,
    required: true,
  },
  daysSinceIAte: {
    type: Number,
    required: true,
  },
});

// Pass the name of the collection / table here:
const Food = mongoose.model("Food", FoodSchema);
module.exports = Food;
