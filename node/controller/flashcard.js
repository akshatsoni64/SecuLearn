const { resolve } = require("path");
const FlashCard = require("../model/flashcard");
const topic = require("../model/topic");

class FlashCardController {
  constructor() {}

  addFlashCard(request, response) {
    console.log("\nPOST:", request.originalUrl, new Date(), "Adding FlashCard");
    console.log(request.body);
    const flashcard = new FlashCard({
      topic_id: request.body.topic_id,
      title: request.body.title,
      description: request.body.description,
    });

    flashcard.save().then((flashcards) => {
      response.json(flashcards);
    });
  }

  async getFlashCards(request, response) {
    console.log(
      "\nGET:",
      request.originalUrl,
      new Date(),
      "Getting FlashCards"
    );

    if (request.params.id) {
      await FlashCard.findById(request.params.id)
        .lean()
        .exec((err, flashcard) => {
          Topic.findById(flashcard.topic_id)
            .lean()
            .exec((err, topic) => {
              delete flashcard.topic_id;
              flashcard.topic = topic.name;
              response.json(flashcard);
            });
        });
    } else {
      await FlashCard.find()
        .lean()
        .exec(async (err, flashcards) => {
          await Promise.all(
            flashcards.map(async (flashcard) => {
              return new Promise((resolve, reject) => {
                Topic.findById(flashcard.topic_id).lean().exec((err, topic) => {
                  if(err){
                    reject(err);
                  }
                  else{
                    delete flashcard.topic_id;
                    flashcard.topic = topic.name;
                    resolve(flashcard);
                  }
                });
              });
            })
          )
          .then((modifiedFlashcards) => {
            response.json(modifiedFlashcards); // Respond with modified quizzes
          })
          .catch((error) => {
            response.status(500).json({ error: "Internal server error" });
          });
        });
    }
  }

  delFlashCard(request, response) {
    console.log(
      "\nDELETE:",
      request.originalUrl,
      new Date(),
      "Deleting FlashCard"
    );
    FlashCard.findByIdAndDelete(request.body.id).then((flashcard) => {
      response.json(flashcard);
    });
  }
}
module.exports = FlashCardController;
