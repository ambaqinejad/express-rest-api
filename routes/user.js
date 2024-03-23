const express = require("express")
const path = require("path")

const userController = require(path.join(__dirname, "..", "controllers", "user"));

const router = express.Router();

router.get("/", userController.findAll)

module.exports = router