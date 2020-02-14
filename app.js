const express = require("express");

const app = express();
const athelteRouter = require("./routes/athleteRoutes");

////// route

app.use("/", athelteRouter);
app.use("/", express.static("public"));
app.use("/getTests", express.static("public"));
module.exports = app;
