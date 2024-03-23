const path = require("path");

const usersData = require(path.join(__dirname, "..", "models", "user"))

const userController = {}
userController.findAll = (req, res) => {
    return usersData
}

module.exports = userController