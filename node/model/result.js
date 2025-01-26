const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const Schema = mongoose.Schema;

// create Schema
const ResultSchema = new Schema({
  id: {
    type: String,
    required: true,
    default: uuidv4,
  },
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
