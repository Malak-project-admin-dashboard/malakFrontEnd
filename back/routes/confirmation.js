const express = require("express");
const router = express.Router();
const adminControler = require("../controllers/confirmation");



router.post("/adminConfirmation", adminControler.addConfirmation);
router.get("/getAllConfirmations", adminControler.getAllConfirmations);
module.exports = router;