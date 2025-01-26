const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const Schema = mongoose.Schema;

// create Schema
const TopicSchema = new Schema({
  id: {
    type: String,
    required: true,
    default: uuidv4,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = Topic = mongoose.model("topic", TopicSchema);
