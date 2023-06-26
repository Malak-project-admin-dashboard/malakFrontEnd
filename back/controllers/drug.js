const Drug = require("../models/drug");

exports.addDrug = (req, res, next) => {
  const data = req.body;
  const myNewDrug = new Drug({
    drugName: data.drugName,
    drugDesc: data.drugDesc,
    drugUrl: data.drugUrl,
  });
  myNewDrug.save().catch((err) => console.log(err));
  res.json("create a new drug successfully");
};





exports.getAllDrugs = (req, res, next) => {
    Drug.find({})
      .then(drugs => {
        res.status(200).json(drugs);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  };
