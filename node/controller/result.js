const Result = require("../model/result");

class ResultController {
  constructor() {}

  addResult(request, response) {
    console.log("\nPOST:", request.originalUrl, new Date(), "Adding Result");
    console.log(request.body);
    const Result = new Result({
      id: request.body.id,
      question_id: request.body.question_id,
      user_id: request.body.user_id,
      status: request.body.status,
    });

    Result.save().then((Result) => {
      response.json(Result);
    });
  }

  getResults(request, response){
    console.log("\nGET:", request.originalUrl, new Date(), "Getting Results");
    Result.find().then((Results) => {
      response.json(Results);
    });
  }
}
module.exports = ResultController;
