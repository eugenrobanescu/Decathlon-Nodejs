const express = require("express");
const athleteController = require("./../controllers/athleteController");

const router = express.Router();

// router.param('id', tourController.checkID);

router.route("/getAthletes").get(athleteController.getAthletes);
router.route("/getTests").get(athleteController.getTests);

// router
//   .route("/:id")
//   .get(athleteController.getA)
//   .patch(athleteController.updateTour)
//   .delete(athleteController.deleteTour);

module.exports = router;
