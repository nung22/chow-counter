require('dotenv').config();
// imports express module
const express = require('express');
// imports cors module for cross-origin requests
const cors = require('cors');
// imports cookie parser
const cookieParser = require('cookie-parser');
// imports routes file
const { userRouter } = require('./routes/user.routes');
const { externalApiRouter } = require('./routes/externalApi.routes');
// Environment vars
const PORT = 8000;
// invokes express
const app = express();

require('./config/mongoose.config');
// enables ability to send and read cookies with each request/response
app.use(cookieParser());
// enables cross-origin requests
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
// allows express to recognize incoming Request Objects as JSON Objects
app.use(express.json());
// allows express to recognize the incoming Request Object as strings or arrays
app.use(express.urlencoded({ extended: true }));
// Adds all the product routes with this url prepended to them.
// If we had another model, we'd do the same with that model's routes.
app.use('/api/users', userRouter)
app.use('/externalApi', externalApiRouter)

// runs server on specified port (must be below other code blocks)
app.listen(PORT, () => {
  console.log(`Listening at Port ${PORT}`);
})