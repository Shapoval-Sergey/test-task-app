const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    email: { type: String, default: null, unique: false },
    shared: { type: String, default: false },
  },
  { versionKey: false, timestamps: true },
);

module.exports = model("User", schema);
