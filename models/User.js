const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    email: { type: String, sparse: true },
    shared: { type: String, required: true },
  },
  { versionKey: false, timestamps: true },
);

module.exports = model("User", schema);
