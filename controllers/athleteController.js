const mysql = require("mysql");
const replaceTemplate = require("../modules/replaceTemplate");
const tablePattern = require("../modules/tablePattern");
const fs = require("fs");
const tempAthlete = fs.readFileSync("./public/athletesTabel.html", "utf-8");
const tempOverview = fs.readFileSync("./public/overview.html", "utf-8");
const tempOverview2 = fs.readFileSync("./public/overview2.html", "utf-8");
const testCard = fs.readFileSync("./public/testCard.html", "utf-8");
const welcome = fs.readFileSync("./public/welcome.html", "utf-8");
const main = fs.readFileSync("./public/main.js", "utf-8");

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
exports.getWelcome = (req, res) => {
  res.send(welcome);
};
exports.getAthletes = (req, res) => {
  const selection = req.query.Events || "Long Jump";

  let sql = `SELECT * FROM athletes WHERE test = "${selection}"`;
  let query = db.query(sql, (err, results) => {
    if (err) throw err;

    const athletesHtml = results
      .map(el => replaceTemplate.athletes(tempAthlete, el))
      .join("");
    let outputDemo = tablePattern.tableAthletes.replace(
      /{%ATHLETESDATA%}/g,
      athletesHtml
    );

    let outputFinal = tempOverview.replace(/{%DATA%}/g, outputDemo);

    outputFinal = outputFinal.replace(
      /{%FORMATHLETE%}/g,
      tablePattern.formEvent
    );
    outputFinal = outputFinal.replace(/{%EV%}/g, selection);
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
    const outputDemo = tablePattern.cardTests.replace(/{%CARDS%}/g, testsHtml);
    let output = tempOverview.replace(/{%DATA%}/g, outputDemo);
    output = output.replace(/{%FORMATHLETE%}/g, "");
    res.send(output);
  });
};

exports.getPerformance = (req, res) => {
  const selectionAthlete = req.query.athletes || "Andrei";
  const selectionEvent = req.query.Events || "Long Jump";

  let sql = `SELECT * FROM athletes WHERE firstName = "${selectionAthlete}" AND test="${selectionEvent}" `;
  let query = db.query(sql, (err, results) => {
    if (err) throw err;

    const chartsHtml = results
      .map(el => replaceTemplate.chart(tablePattern.chartScript, el))
      .join("");
    if (results == 0) {
      let sql2 = `SELECT * FROM athletes WHERE firstName = "${selectionAthlete}"`;
      let query2 = db.query(sql2, (err, results2) => {
        let arr = [results2[0]];
        const chartsHtml2 = arr
          .map(el => replaceTemplate.chart(tablePattern.chartScript, el))
          .join("");

        let outputDemo2 = tempOverview2.replace(/{%SCRIPT%}/g, chartsHtml2);
        outputDemo2 = outputDemo2.replace(
          /{%ERR%}/g,
          "The athlete did not participate in the selected event"
        );
        res.send(outputDemo2);
      });
    } else {
      let outputDemo2 = tempOverview2.replace(/{%SCRIPT%}/g, chartsHtml);
      outputDemo2 = outputDemo2.replace(/{%ERR%}/g, "");
      res.send(outputDemo2);
    }
  });
};
