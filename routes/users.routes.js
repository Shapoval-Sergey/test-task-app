"use strict";

const { Router } = require("express");
const router = Router();

const User = require("../models/User");

router.post("/actions", async (req, res) => {
  try {
    const user = await new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (e) {
    res.status(500).json({ message: "Что-то пошло не так попробуйте снова" });
  }
});

router.patch("/actions", async (req, res) => {
  try {
    const { id, shared } = req.body;

    const user = await User.findByIdAndUpdate(
      id,
      { shared: shared },
      { returnOriginal: false },
    );
    res.status(200).json(user);
  } catch (e) {
    res.status(500).json({ message: "Что-то пошло не так попробуйте снова" });
  }
});

router.get("/actions", async (req, res) => {
  try {
    const { userId } = req.body;

    const currentUser = await User.findOne({ userId });

    res.status(200).json(currentUser);
  } catch (e) {
    res.status(500).json({ message: "Что-то пошло не так попробуйте снова" });
  }
});

module.exports = router;
