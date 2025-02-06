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

  async getQuizs(request, response) {
    console.log("\nGET:", request.originalUrl, new Date(), "Getting Quizzes");
    if (request.params.id) {
      await Quiz.findById(request.params.id)
        .lean()
        .exec((err, quiz) => {
          Topic.findById(quiz.topic_id)
            .lean()
            .exec((err, topic) => {
              delete quiz.topic_id;
              quiz.topic = topic.name;
              response.json(quiz);
            });
        });
    } else {
      await Quiz.find()
        .lean()
        .exec(async (err, quizzes) => {
          await Promise.all(
            quizzes.map(async (quiz) => {
              return new Promise((resolve, reject) => {
                Topic.findById(quiz.topic_id)
                  .lean()
                  .exec((err, topic) => {
                    if (err) {
                      reject(err); // reject if error occurs
                    } else {
                      delete quiz.topic_id;
                      quiz.topic = topic.name;
                      resolve(quiz); // resolve once the quiz is modified
                    }
                  });
              });
            })
          )
            .then((modifiedQuizzes) => {
              response.json(modifiedQuizzes); // Respond with modified quizzes
            })
            .catch((error) => {
              console.error("Error modifying quizzes:", error);
              response.status(500).json({ error: "Internal server error" });
            });
        });
    }
  }

  delQuiz(request, response) {
    console.log("\nDELETE:", request.originalUrl, new Date(), "Deleting Quiz");
    Quiz.findByIdAndDelete(request.body.id).then((quiz) => {
      response.json(quiz);
    });
  }
}
module.exports = QuizController;
