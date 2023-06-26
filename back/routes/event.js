const express = require("express");
const router = express.Router();
const adminControler = require("../controllers/event");



router.post("/adminEvent", adminControler.addEvent);
router.get('/getAllEvents',adminControler.getAllEvents)

module.exports = router;