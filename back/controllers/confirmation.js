const Confirmation = require("../models/confirmation");

exports.addConfirmation = (req, res, next) => {
  const data = req.body;

  const myConfirmation = new Confirmation({
    foodName: data.foodName,
    foodDesc: data.foodDesc,
    foodUrl: data.foodUrl,
    Acceptance: data.Acceptance,
  });

  myConfirmation.save().catch((err) => console.log(err));
  res.json("create a new conformation successfully");
};




exports.getAllConfirmations = (req, res, next) => {
  Confirmation.find({})
  .then((Confirmations) => {
    res.status(200).json(Confirmations);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
}