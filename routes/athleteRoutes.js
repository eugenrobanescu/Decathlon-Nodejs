const express = require("express");
const athleteController = require("./../controllers/athleteController");

const router = express.Router();

router.route("/getathletes").get(athleteController.getAthletes);
router.route("/gettests").get(athleteController.getTests);

module.exports = router;
