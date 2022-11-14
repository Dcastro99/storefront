'use strict';
//;/  (O_O) /;//
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3002;

const app = express();
app.use(cors());
app.use(express.json());


app.get('/', (request, response) => {
  response.send('TESTING STOREFRONT!');
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
