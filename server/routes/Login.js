const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const uuid = require("uuid/v4");

//will change this to db later on
const users = [];

router.get("/register", (req, res) => {
  res.send("ok");
});

router.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    newUser = {
      id: uuid(),
      email: req.body.email,
      password: hashedPassword,
    };

    users.push(newUser);
    res.json(users);
  } catch {
    res.status(400).send("bad");
  }
  console.log(users);
});

module.exports = router;
