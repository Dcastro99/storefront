const mongoose = require('mongoose');

const { Schema } = mongoose;

const itemSchema = new Schema({
  name: String,
  description: String,
  category: String,
  price: Number,
  inventory: Number,
  image: String,
});

const ITEM = mongoose.model('item', itemSchema);

module.exports = ITEM;
