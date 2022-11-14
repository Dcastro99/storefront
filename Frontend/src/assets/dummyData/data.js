import beanie from '../images/beanie.jpg';
import headphones from '../images/headphones.jpg';
import littleNightmare from '../images/littleNightmares2.jpg';
import knife from '../images/knife.jpg';
import Bow from '../images/bow.jpg';
import Hat from '../images/hat.jpg';
import Controller from '../images/controller.jpg';
import recordPlayer from '../images/recordPlayer.jpg';
import Chance from 'chance';
const chance = new Chance();




export const data = [

  {
    id: chance.bb_pin(),
    name: "Audio-Technica headphones",
    description: "-- Audio-Technica headphones...Better than beats by that Dre guy.",
    category: "electronics",
    price: 200,
    inventory: 200,
    image: headphones,
  },
  {
    id: chance.bb_pin(),
    name: "XBOX Controller",
    description: "-- Needed in every home",
    category: "games",
    price: 75,
    inventory: 100,
    image: Controller,
  },
  {
    id: chance.bb_pin(),
    name: "Beanie",
    description: "-- one-size fits all and keeps your noggin warm and snug.",
    category: "apperal",
    price: 15,
    inventory: 100,
    image: beanie,
  },
  {
    id: chance.bb_pin(),
    name: "Record Player",
    description: "-- Simple. Nice. Oldschool.",
    category: "electronics",
    price: 175,
    inventory: 100,
    image: recordPlayer,
  },
  {
    id: chance.bb_pin(),
    name: "Little Nightmares II",
    description: "-- A Spooky Platformer Dripping With Tension And Dread",
    category: "games",
    price: 60,
    inventory: 50,
    image: littleNightmare,
  },
  {
    id: chance.bb_pin(),
    name: "Hunting knife",
    description: "-- Small but deadly",
    category: "weapons",
    price: 6000,
    inventory: 3,
    image: knife,
  },
  {
    id: chance.bb_pin(),
    name: "Bow & Arrow",
    description: "--You are Katnis",
    category: "weapons",
    price: 200,
    inventory: 5,
    image: Bow,
  },
  {
    id: chance.bb_pin(),
    name: "Hat",
    description: "--You wear it...You like it",
    category: "apperal",
    price: 30,
    inventory: 2,
    image: Hat,
  },
];

export const categoryTabs = [
  {
    id: 9,
    title: 'All',
    value: 'all',
  },
  {
    id: 0,
    title: 'Electronics',
    value: 'electronics',
  },
  {
    id: 1,
    title: 'Apperal',
    value: 'apperal',
  },
  {
    id: 2,
    title: 'Games',
    value: 'games',
  },
  {
    id: 2,
    title: 'Weapons',
    value: 'weapons',
  },
]
module.export = {
  data,
  categoryTabs,
}







