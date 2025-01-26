const FlashCard = require("../model/flashcard");

class FlashCardController {
  constructor() {}

  addFlashCard(request, response) {
    console.log("\nPOST:", request.originalUrl, new Date(), "Adding FlashCard");
    console.log(request.body);
    const FlashCard = new FlashCard({
      title: request.body.title,
      password: request.body.password,
    });

    FlashCard.save().then((flashcards) => {
      response.json(flashcards);
    });
  }

  getFlashCards(request, response){
    console.log("\nGET:", request.originalUrl, new Date(), "Getting FlashCards");
    FlashCard.find().then((flashcards) => {
      response.json(flashcards);
    });
  }
}
module.exports = FlashCardController;
