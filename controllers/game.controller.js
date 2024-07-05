const Game = require('../models/game.model.js');

const createGame = async (request, response) => {
    try {
        const game = await Game.create(request.body)
        response.status(200).json(game);
    } catch (error) {
        response.status(500).json({message: error.message});
    }
}

const getGames = async (request, response) => {
    try {
        const games = await Game.find(request.body)
        response.status(200).json(games);
    } catch (error) {
        response.status(500).json({message: error.message});
    }
};

const getGame = async (request, response) => {
    try {
        const {id} = request.params;
        const game = await Game.findById(id);
        response.status(200).json(game);
    } catch (error) {
        response.status(500).json({message: error.message});
    }
}

const updateGame = async (request, response) => {
    try {
        const {id} = request.params;
        const game = await Game.findByIdAndUpdate(id, request.body);
        if(!game) {
            return response.status(404).json({message: "Game not found."});
        }
        const updatedGame = await Game.findById(id);
        response.status(200).json(updatedGame);
    } catch (error) {
        response.status(500).json({message: error.message});
    }
};

const deleteGame = async (request, response) => {
    try {
        const {id} = request.params;
        const game = await Game.findByIdAndDelete(id);
        if(!game) {
            return response.status(404).json({message: "Game not found."});
        }
        response.status(200).json({message: "Game deleted sucessfully."});
    } catch (error) {
        response.status(500).json({message: error.message});
    }
}

module.exports = {
    getGames,
    getGame,
    createGame,
    updateGame,
    deleteGame
}