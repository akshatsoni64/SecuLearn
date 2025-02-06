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
router.get('/topic/:id', new topicController().getTopics);
router.get('/topic', new topicController().getTopics);

router.post('/result', new resultController().addResult);
router.get('/result/:id', new resultController().getResults);
router.get('/result', new resultController().getResults);
router.delete('/result', new resultController().delResult);


router.post('/quiz', new quizController().addQuiz);
router.get('/quiz/:id', new quizController().getQuizs);
router.get('/quiz', new quizController().getQuizs);
router.delete('/quiz', new quizController().delQuiz);

router.post('/flashcard', new flashcardController().addFlashCard);
router.get('/flashcard/:id', new flashcardController().getFlashCards);
router.get('/flashcard', new flashcardController().getFlashCards);

router.get('/leaderboard', new resultController().getLeaderboard);

module.exports = router;