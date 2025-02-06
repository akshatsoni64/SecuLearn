const Result = require("../model/result");

class ResultController {
  constructor() {}

  addResult(request, response) {
    console.log("\nPOST:", request.originalUrl, new Date(), "Adding Result");
    console.log(request.body);
    const result = new Result({
      question_id: request.body.question_id,
      user_id: request.body.user_id,
      status: request.body.status,
    });

    result.save().then((Result) => {
      response.json(Result);
    });
  }

  getResults(request, response) {
    console.log("\nGET:", request.originalUrl, new Date(), "Getting Results");
    if (request.params.id) {
      Result.findById(request.params.id).then((result) => {
        response.json(result);
      });
    } else {
      Result.find().then((results) => {
        response.json(results);
      });
    }
  }

  delResult(request, response) {
    console.log(
      "\nDELETE:",
      request.originalUrl,
      new Date(),
      "Deleting Result"
    );
    Result.findByIdAndDelete(request.body.id).then((result) => {
      response.json(result);
    });
  }

  async getLeaderboard(request, response) {
    console.log(
      "\nGET:",
      request.originalUrl,
      new Date(),
      "Getting Leaderboard"
    );
    await Result.aggregate([
      {
        $match: { status: true },
      },
      {
        $group: {
          _id: "$user_id",
          total: { $sum: 1 },
        },
      },
      {
        $sort: { total: -1 },
      },
    ]).then(async (results) => {
      await Promise.all(
        results.map((result) => {
          return new Promise((resolve, reject) => {
            User.findById(result._id)
              .lean()
              .exec((err, user) => {
                if (err) {
                  reject(err); // reject if error occurs
                } else {
                  result.user = user.name;
                  resolve(result); // resolve once the quiz is modified
                }
              });
          });
        })
      )
        .then((modifiedResults) => {
          response.json(modifiedResults); // Respond with modified quizzes
        })
        .catch((error) => {
          response.status(500).json({ error: "Internal server error" });
        });
    });
  }
}
module.exports = ResultController;
