'use strict';
//;/  (O_O) /;//
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3002;
const app = express();
app.use(cors());
app.use(express.json());


const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

const ITEM = require('./src/models/items');


app.get('/', (request, response) => {
  response.send('TESTING STOREFRONT!');
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
