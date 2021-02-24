"use strict";

const { Router } = require("express");
const router = Router();

const User = require("../models/User");

router.post("/actions", async (req, res) => {
  try {
    const user = await new User(req.body);
    console.log(user);
    user.save();

    res.status(201).json(user);
  } catch (e) {
    res.status(500).json({ message: "Что-то пошло не так попробуйте снова" });
  }
});

router.patch("/actions", async (req, res) => {
  try {
    const { id, shared } = req.body;

    const currentUser = await User.findById({ id });
    // console.log(currentUser);
    currentUser.updateOne({ $set: { shared } });
  } catch (e) {
    res.status(500).json({ message: "Что-то пошло не так попробуйте снова" });
  }
});

router.get("/actions", async (req, res) => {
  try {
    const { userId } = req.body;

    const currentUser = await User.findOne({ userId });
    // console.log(currentUser);

    res.status(200).json(currentUser);
  } catch (e) {
    res.status(500).json({ message: "Что-то пошло не так попробуйте снова" });
  }
});

module.exports = router;
