const Topic = require("../model/topic");

class TopicController {
  constructor() {}

  addTopic(request, response) {
    console.log("\nPOST:", request.originalUrl, new Date(), "Adding Topic");
    console.log(request.body);
    const Topic = new Topic({
      id: request.body.id,
      name: request.body.name,
      description: request.body.description,
    });

    Topic.save().then((topic) => {
      response.json(topic);
    });
  }

  getTopics(request, response){
    console.log("\nGET:", request.originalUrl, new Date(), "Getting Topics");
    Topic.find().then((topics) => {
      response.json(topics);
    });
  }
}
module.exports = TopicController;
