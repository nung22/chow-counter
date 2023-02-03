const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

/* 
{PATH} will be replaced with the field name, such as "stringField".
*/
const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      minlength: [2, "First name must be at least {MINLENGTH} characters"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      minlength: [2, "Last name must be at least {MINLENGTH} characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      validate: {
        validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Please enter a valid email",
      },
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be 8 characters or longer"],
    },
  },
  { timestamps: true }
);

// add this after UserSchema is defined
UserSchema.virtual("confirmPassword")
  .get(() => this._confirmPassword)
  .set((value) => (this._confirmPassword = value));

// One common feature of Middleware is the "next" function. Essentially 
// when our Middleware has finished whatever it needs to do, we need to call this 
// to have the next Middleware or next function (in this case normal validations) run.
UserSchema.pre('validate', function(next) {
  if (this.password !== this.confirmPassword) {
    this.invalidate('confirmPassword', 'Password must match confirm password');
  }
  next();
});

// It's recommended to use Bcrypt in an asynchronous way so we will be using it with 
// Promises. The "10" inside the bcrypt.hash() function refers to the number of salt rounds 
// that Bcrypt will use when generating a salt. For our purposes "10" will be a fine value 
// here. As in our previous Middleware we will need to call the "next" function once the 
// Promise is fulfilled.
UserSchema.pre('save', function(next) {
  bcrypt.hash(this.password, 10)
    .then(hash => {
      this.password = hash;
      next();
    });
});

/* 
Register schema with mongoose and provide a string to name the collection. This
also returns a reference to our model that we can use for DB operations.
*/
const User = mongoose.model("User", UserSchema);

// Always exporting an object even when we only have one thing to export
// makes it easy to add more exports later if ever needed without breaking
// any code that imports from this file.
module.exports = { User };