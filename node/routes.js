const express = require("express")
const router = express.Router()

const topicController = require("./controller/topic");
const resultController = require("./controller/result");
const quizController = require("./controller/quiz");
const flashcardController = require("./controller/flashcard");
const userController = require("./controller/user");

router.post('/user', new userController().addUser);
router.get('/user', new userController().getUsers);
router.delete('/user', new userController().delUser);
router.post('/auth', new userController().authenticate);

router.post('/topic', new topicController().addTopic);
router.get('/topic', new topicController().getTopics);

router.post('/result', new resultController().addResult);
router.get('/result', new resultController().getResults);

router.post('/quiz', new quizController().addQuiz);
router.get('/quiz', new quizController().getQuizs);

router.post('/flashcard', new flashcardController().addFlashCard);
router.get('/flashcard', new flashcardController().getFlashCards);


module.exports = router;