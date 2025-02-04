const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// create Schema
const ResultSchema = new Schema({
  question_id: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
});

module.exports = Result = mongoose.model("result", ResultSchema);
