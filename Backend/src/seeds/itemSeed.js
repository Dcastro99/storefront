require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);


const item = require('../models/items');



const seed = async () => {
  await item.create({
    name: "Audio-Technica headphones",
    description: "-- Audio-Technica headphones...Better than beats by that Dre guy.",
    category: "electronics",
    price: 200,
    inventory: 200,
    image: 'https://ibb.co/S5KQ7Zs',
  });
  await item.create({
    name: "XBOX Controller",
    description: "-- Needed in every home",
    category: "games",
    price: 75,
    inventory: 100,
    image: 'https://ibb.co/NsRMRXw',
  });
  await item.create({
    name: "Beanie",
    description: "-- one-size fits all and keeps your noggin warm and snug.",
    category: "apperal",
    price: 15,
    inventory: 100,
    image: 'https://ibb.co/tK58nZN'
  });
  await item.create({
    name: "Record Player",
    description: "-- Simple. Nice. Oldschool.",
    category: "electronics",
    price: 175,
    inventory: 100,
    image: 'https://ibb.co/BKtNdgX',
  });
  await item.create({
    name: "Little Nightmares II",
    description: "-- A Spooky Platformer Dripping With Tension And Dread",
    category: "games",
    price: 60,
    inventory: 50,
    image: 'https://ibb.co/tKh6Y7y',
  });
  await item.create({
    name: "Hunting knife",
    description: "-- Small but deadly",
    category: "weapons",
    price: 6000,
    inventory: 3,
    image: 'https://ibb.co/myYh2wt',
  });
  await item.create({
    name: "Bow & Arrow",
    description: "--You are Katnis",
    category: "weapons",
    price: 200,
    inventory: 5,
    image: 'https://ibb.co/NnhBgyY',
  });
  await item.create({
    name: "Hat",
    description: "--You wear it...You like it",
    category: "apperal",
    price: 30,
    inventory: 2,
    image: 'https://ibb.co/bLS4LfF',
  });

  console.log('Seeded database!');

  mongoose.disconnect();
};
seed();
