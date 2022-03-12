const express = require("express");
const passport = require("passport");
const router = express.Router();
const StuffController = require("../controllers/stuff.controller");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  StuffController.getStuff
);
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  StuffController.createStuff
);
// router.get("/:id", passport.authenticate("jwt", { session: false }), StuffController.getStuffById);

module.exports = router;
