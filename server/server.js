// imports express module
const express = require('express');
// imports cors module for cross-origin requests
const cors = require('cors');
// imports routes file
// const { foodRouter } = require('./routes/food.routes');
const { externalApiRouter } = require('./routes/externalApi.routes');
// Environment vars
const PORT = 8000;
// invokes express
const app = express();

require('./config/mongoose.config');
// enables cross-origin requests
app.use(cors());
// allows express to recognize incoming Request Objects as JSON Objects
app.use(express.json());
// allows express to recognize the incoming Request Object as strings or arrays
app.use(express.urlencoded({ extended: true }));
// Adds all the product routes with this url prepended to them.
// If we had another model, we'd do the same with that model's routes.
// app.use('/api/foods', foodRouter)
app.use('/externalApi', externalApiRouter)

// runs server on specified port (must be below other code blocks)
app.listen(PORT, () => {
  console.log(`Listening at Port ${PORT}`);
})