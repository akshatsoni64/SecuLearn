const Quiz = require("../model/quiz");
const Topic = require("../model/topic");

class QuizController {
  constructor() {}

  addQuiz(request, response) {
    console.log("\nPOST:", request.originalUrl, new Date(), "Adding Quiz");
    console.log(request.body);
    const quiz = new Quiz({
      topic_id: request.body.topic_id,
      question: request.body.question,
      option_1: request.body.option_1,
      option_2: request.body.option_2,
      option_3: request.body.option_3,
      option_4: request.body.option_4,
      correct_option: request.body.correct_option,
    });

    quiz.save().then((quizzes) => {
      response.json(quizzes);
    });
  }

  getQuizs(request, response) {
    console.log("\nGET:", request.originalUrl, new Date(), "Getting Quizzes");
    Quiz.find().then((quizzes) => {
      response.json(quizzes);
    });
  }

  delQuiz(request, response) {
    console.log("\nDELETE:", request.originalUrl, new Date(), "Deleting Quiz");
    Quiz.findByIdAndDelete(request.body.id).then((quiz) => {
      response.json(quiz);
    });
  }
}
module.exports = QuizController;
