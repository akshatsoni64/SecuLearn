const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// create Schema
const QuizSchema = new Schema({
    topic_id:{
        type: String,
        required: true
    },
    question:{
        type: String,
        required: true
    },
    option_1:{
        type: String,
        required: true
    },
    option_2:{
        type: String,
        required: true
    },
    option_3:{
        type: String,
        required: true
    },
    option_4:{
        type: String,
        required: true
    },
    correct_option:{
        type: String,
        required: true
    },
});

module.exports = Quiz = mongoose.model('quiz', QuizSchema);