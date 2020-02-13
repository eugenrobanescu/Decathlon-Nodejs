const express = require("express");
const athleteController = require("./../controllers/athleteController");

const router = express.Router();

// router.param('id', tourController.checkID);

router.route("/").get(athleteController.getAthletes);
// router
//   .route("/:id")
//   .get(athleteController.getTour)
//   .patch(athleteController.updateTour)
//   .delete(athleteController.deleteTour);

module.exports = router;
