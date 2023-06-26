const express = require("express");
const router = express.Router();
const adminControler = require("../controllers/drug");



router.post("/adminDrug", adminControler.addDrug);
router.get('/getAllDrugs',adminControler.getAllDrugs)
module.exports = router;