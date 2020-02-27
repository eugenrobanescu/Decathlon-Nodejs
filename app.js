const express = require("express");

const app = express();
const athelteRouter = require("./routes/athleteRoutes");

////// route

app.use("/", athelteRouter);
app.use("/", express.static("public"));
app.use("/getathletes", express.static("public"));
app.use("/getTests", express.static("public"));
app.use("/getPerformance", express.static("public"));
// app.use(express.static("main"));
module.exports = app;
