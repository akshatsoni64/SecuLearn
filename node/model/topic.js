const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// create Schema
const TopicSchema = new Schema({
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
