const mysql = require("mysql");
const replaceTemplate = require("../modules/replaceTemplate");
const fs = require("fs");

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
const tempAthlete = fs.readFileSync("./public/athletesTabel.html", "utf-8");
const tempOverview = fs.readFileSync("./public/overview.html", "utf-8");
exports.getAthletes = (req, res) => {
  console.log();
  let sql = "SELECT * FROM athletes";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;

    const athletesHtml = results
      .map(el => replaceTemplate(tempAthlete, el))
      .join("");
    const output = tempOverview.replace(/{%ATHLETESDATA%}/g, athletesHtml);
    res.send(output);
  });
};
