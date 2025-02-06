const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// create Schema
const FlashCardSchema = new Schema({
  topic_id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = FlashCard = mongoose.model("flashcard", FlashCardSchema);
