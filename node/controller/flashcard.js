const FlashCard = require("../model/flashcard");

class FlashCardController {
  constructor() {}

  addFlashCard(request, response) {
    console.log("\nPOST:", request.originalUrl, new Date(), "Adding FlashCard");
    console.log(request.body);
    const flashcard = new FlashCard({
      title: request.body.title,
      description: request.body.description,
    });

    flashcard.save().then((flashcards) => {
      response.json(flashcards);
    });
  }

  getFlashCards(request, response) {
    console.log("\nGET:",request.originalUrl,new Date(),"Getting FlashCards");
    FlashCard.find()
      .then((flashcards) => {
        response.json(flashcards);
      })
      .catch((err) => console.log(err));
  }

  delFlashCard(request, response) {
    console.log("\nDELETE:",request.originalUrl,new Date(),"Deleting FlashCard");
    FlashCard.findByIdAndDelete(request.body.id).then((flashcard) => {
      response.json(flashcard);
    });
  }
}
module.exports = FlashCardController;
