const express = require("express");

const app = express();
const athelteRouter = require("./routes/athleteRoutes");

////// route

app.use("/", athelteRouter);
module.exports = app;
