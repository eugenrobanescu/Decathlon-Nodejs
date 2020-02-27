const express = require("express");
const athleteController = require("./../controllers/athleteController");

const router = express.Router();

router.route("/").get(athleteController.getWelcome);
router
  .route("/getathletes")
  .get(athleteController.getAthletes)
  .post(athleteController.getAthletes);
router.route("/gettests").get(athleteController.getTests);
router
  .route("/getperformance")
  .get(athleteController.getPerformance)
  .post(athleteController.getPerformance);

module.exports = router;
