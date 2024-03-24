const path = require("path");

let usersData = require(path.join(__dirname, "..", "models", "user"));

const userController = {};
userController.findAll = (req, res) => {
  res.json(usersData);
};

userController.findOneById = (req, res) => {
  const id = req.params.id;
  const user = usersData.find((user) => user.id === +id);
  user ? res.json(user) : res.json({ message: "User not found" });
};

userController.create = (req, res) => {
  // sort users array based on their id
  usersData = [
    ...usersData.sort((u1, u2) => {
      return u2.id - u1.id;
    }),
  ];
  // create a new id
  const id = usersData[0].id + 1;
  const newUser = { id, ...req.body };
  usersData.push(newUser);
  res.json({
    message: "User created successfully",
    ...newUser,
  });
};

userController.updateOneById = (req, res) => {
  const id = req.params.id;
  usersData = usersData.map((user) => {
    if (user.id === +id) {
      return { ...user, ...req.body };
    }
    return { ...user };
  });
  userController.findOneById(req, res);
};

userController.deleteOneById = (req, res) => {
  const id = req.params.id;
  const deletedUser = usersData.find((user) => user.id === +id);
  usersData = usersData.filter((user) => user.id !== +id);
  deletedUser ? res.json({message: "Deleted successfully", ...deletedUser}) : res.json({message: "User not found"})
};

module.exports = userController;
