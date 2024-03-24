const express = require("express");
const path = require("path");

const userController = require(path.join(
  __dirname,
  "..",
  "controllers",
  "user"
));

const router = express.Router();

router.get("/", userController.findAll);
router.get("/:id", userController.findOneById);
router.post("/", userController.create);
router.put("/:id", userController.updateOneById);
router.delete("/:id", userController.deleteOneById);

module.exports = router;
