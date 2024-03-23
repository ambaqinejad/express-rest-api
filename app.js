const express = require("express");
require("dotenv").config();
const path = require("path")

const userRouter = require(path.join(__dirname, "routes", "user"))

const app = express();
const PORT = process.env.PORT || 4000;

app.use("/users", userRouter)

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})