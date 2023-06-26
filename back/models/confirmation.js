const mongoose = require("mongoose");

// Get the Schema constructor
const Schema = mongoose.Schema;

const confirmation = new Schema({
  foodName: {
    type: String,
    required: true
  },
  foodDesc: {
    type: String,
    required: true
  },
  foodUrl: {
    type: String,
    required: true
  },
  Acceptance: {
    type: Boolean,
    required: true
  }
});

// Create model from the schema
module.exports = mongoose.model("Confirmation", confirmation);
