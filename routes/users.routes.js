"use strict";

const { Router } = require("express");
const router = Router();

const User = require("../models/User");
// const authMiddleware = require("../middleware/auth.middleware");

router.post("/actions", async (req, res) => {
  try {
    // const { shared, email } = req.body;
    const user = new User();
    // const currentUser = await User.findOne({ _id: id });
    // console.log(currentUser);

    user.save();
    res.status(201).json(user);
  } catch (e) {
    res.status(500).json({ message: "Что-то пошло не так попробуйте снова" });
  }
});

// router.get("/actions", async (req, res) => {
//   try {
//     const links = await Link.find({ owner: req.user.userId });
//     res.json(links);
//   } catch (e) {
//     res.status(500).json({ message: "Что-то пошло не так попробуйте снова" });
//   }
// });

// router.get("/:id", authMiddleware, async (req, res) => {
//   try {
//     const link = await Link.findById(req.params.id);
//     res.json(link);
//   } catch (e) {
//     res.status(500).json({ message: "Что-то пошло не так попробуйте снова" });
//   }
// });

module.exports = router;
