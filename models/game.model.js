const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const GameSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please, enter game name."]
        },
        description: {
            type: String,
            required: false
        },
        year: {
            type: Date,
            required: false
        }
    },
    {
        timestamps: true
    }
);

const Game = mongoose.model("Game", GameSchema);
module.exports = Game;