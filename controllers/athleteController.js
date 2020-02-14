const mysql = require("mysql");
const replaceTemplate = require("../modules/replaceTemplate");
const tablePattern = require("../modules/tablePattern");
const fs = require("fs");
const tempAthlete = fs.readFileSync("./public/athletesTabel.html", "utf-8");
const tempOverview = fs.readFileSync("./public/overview.html", "utf-8");
const testCard = fs.readFileSync("./public/testCard.html", "utf-8");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "events"
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log("Mysql connected..");
});
exports.css = exports.getAthletes = (req, res) => {
  let sql = "SELECT * FROM athletes";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;

    const athletesHtml = results
      .map(el => replaceTemplate.athletes(tempAthlete, el))
      .join("");
    const outputDemo = tablePattern.replace(/{%ATHLETESDATA%}/g, athletesHtml);
    const outputFinal = tempOverview.replace(/{%DATA%}/g, outputDemo);
    res.send(outputFinal);
  });
};

exports.getTests = (req, res) => {
  let sql = "SELECT * FROM tests";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;

    const testsHtml = results
      .map(el => replaceTemplate.tests(testCard, el))
      .join("");
    const output = tempOverview.replace(/{%DATA%}/g, testsHtml);
    res.send(output);
  });
};
