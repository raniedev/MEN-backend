const express = require('express');
const Game = require('../models/game.model.js');
const router = express.Router();
const {getGames, getGame, createGame, updateGame, deleteGame} = require('../controllers/game.controller.js');

router.post('/', createGame);
router.get('/', getGames);
router.get('/:id', getGame);
router.put('/:id', updateGame);
router.delete('/id', deleteGame);

module.exports = router;