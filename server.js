const mysql = require("mysql");
const app = require("./app");

//Create connection

const port = 3000;
app.listen(port, () => {
  console.log(`app running on port: ${port}`);
});

// module.exports = db;
