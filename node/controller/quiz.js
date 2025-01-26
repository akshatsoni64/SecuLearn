const Quiz = require("../model/quiz");

class QuizController {
  constructor() {}

  addQuiz(request, response) {
    console.log("\nPOST:", request.originalUrl, new Date(), "Adding Quiz");
    console.log(request.body);
    const Quiz = new Quiz({
      topic_id: request.body.topic_id,
      question: request.body.question,
      option_1: request.body.option_1,
      option_2: request.body.option_2,
      option_3: request.body.option_3,
      option_4: request.body.option_4,
      correct_option: request.body.correct_option,
    });

    Quiz.save().then((quizzes) => {
      response.json(quizzes);
    });
  }

  getQuizs(request, response){
    console.log("\nGET:", request.originalUrl, new Date(), "Getting Quizzes");
    Quiz.find().then((quizzes) => {
      response.json(quizzes);
    });
  }
}
module.exports = QuizController;
