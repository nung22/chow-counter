const mongoose = require('mongoose');
const DB_NAME = 'chow_counter_db';

// creates db
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log(`Established a connection to the ${DB_NAME}`))
    .catch(err => console.log(`Something went wrong when connecting to ${DB_NAME}`, err));

