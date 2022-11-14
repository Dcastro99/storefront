import beanie from '../images/beanie.jpg';
import headphones from '../images/headphones.jpg';
import littleNightmare from '../images/littleNightmares2.jpg';
import knife from '../images/knife.jpg';

export const data = [
  {
    id: 0,
    name: "Audio-Technica headphones",
    description: "-- Audio-Technica headphones...Better than beats by that Dre guy.",
    category: "electronics",
    price: "$200",
    inventory: 200,
    image: headphones,
  },
  {
    id: 1,
    name: "Beanie",
    description: "-- one-size fits all and keeps your noggin warm and snug.",
    category: "apperal",
    price: "$15",
    inventory: 100,
    image: beanie,
  },
  {
    id: 2,
    name: "Little Nightmares II",
    description: "-- A Spooky Platformer Dripping With Tension And Dread",
    category: "games",
    price: "$60",
    inventory: 50,
    image: littleNightmare,
  },
  {
    id: 3,
    name: "Hunting knife",
    description: "-- Small but deadly",
    category: "weapons",
    price: "$6000",
    inventory: 3,
    image: knife,
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







