const mongoose = require('mongoose');

/* 
{PATH} will be replaced with the field name, such as "stringField".
*/
const ExerciseSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Exercise {PATH} is required'],
            minlength: [2, 'Exercise {PATH} must be at least {MINLENGTH} characters']
        },
        brand: {
            type: String,
        },
        duration: {
            type: Number,
            required: [true, 'Duration is required and must be a number'],
            min: [1, 'Duration must be at least 1 minute']
        },
        calories: {
            type: Number,
            required: [true, 'Calorie information is required and must be a number'],
        },
    },
    { timestamps: true }
)

/* 
Register schema with mongoose and provide a string to name the collection. This
also returns a reference to our model that we can use for DB operations.
*/
const Exercise = mongoose.model('Exercise', ExerciseSchema);

// Always exporting an object even when we only have one thing to export
// makes it easy to add more exports later if ever needed without breaking
// any code that imports from this file.
module.exports = { Exercise };