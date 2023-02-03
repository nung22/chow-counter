const { User } = require("../models/user.model");
const { 
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUserById,
} = require("../services/user.service");

const handleRegisterUser = async (req, res) => {
  User.create(req.body)
    .then((user) => {
      const userToken = jwt.sign(
        {
          id: user._id,
        },
        process.env.SECRET_KEY
      );

      res
        .cookie("usertoken", userToken, secret, {
          httpOnly: true,
        })
        .json({ msg: "success!", user: user });
    })
    .catch((err) => res.status(400).json(err));
};

const handleLoginUser = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (user === null) {
    // email not found in users collection
    return res.sendStatus(400);
  }

  // if we made it this far, we found a user with this email address
  // let's compare the supplied password to the hashed password in the database
  const correctPassword = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (!correctPassword) {
    // password wasn't a match!
    return res.sendStatus(400);
  }

  // if we made it this far, the password was correct
  const userToken = jwt.sign(
    {
      id: user._id,
    },
    process.env.SECRET_KEY
  );

  // note that the response object allows chained calls to cookie and json
  res
    .cookie("usertoken", userToken, secret, {
      httpOnly: true,
    })
    .json({ msg: "success!" });
};

const handleLogoutUser = (req, res) => {
  res.clearCookie('usertoken');
  res.sendStatus(200);
}

const handleGetAllUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    return res.json(users);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const handleGetUserById = async (req, res) => {
  const user = await getUserById(req.params.id);
  return res.json(user);
};

const handleDeleteUserById = async (req, res) => {
  try {
    const deletedUser = await deleteUserById(req.params.id);
    return res.json(deletedUser);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const handleUpdateUserById = async (req, res) => {
  try {
    const updatedUser = await updateUserById(
      req.params.id,
      req.body
    );
    return res.json(updatedUser);
  } catch (err) {
    return res.status(400).json(err);
  }
};

module.exports = {
  handleRegisterUser,
  handleLoginUser,
  handleLogoutUser,
  handleGetAllUsers,
  handleGetUserById,
  handleDeleteUserById,
  handleUpdateUserById,
};
