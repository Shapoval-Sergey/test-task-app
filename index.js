const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();
const uriDb = process.env.URI_DB;

const app = express();

app.use(express.json({ extended: true }));

app.use("/api/user", require("./routes/users.routes"));

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "client", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use((req, res, next) => {
  res.status(404).json({
    status: "error",
    code: 404,
    message: `Use api on routes ${req.baseUrl}/api/`,
    data: "Not Found",
  });
});

app.use((err, req, res, next) => {
  err.status = err.status ? err.status : 500;
  res.status(err.status).json({
    status: err.status === 500 ? "fail" : "error",
    code: err.status,
    message: err.message,
    data: err.status === 500 ? "Internal Server Error" : err.data,
  });
});

const PORT = process.env.PORT || 5000;

async function start() {
  try {
    await mongoose.connect(uriDb, {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    });
    app.listen(PORT, () => {
      console.log(`App has been started on port ${PORT} ...`);
    });
  } catch (error) {
    console.log("Server Error", error.message);
    process.exit(1);
  }
}

start();
