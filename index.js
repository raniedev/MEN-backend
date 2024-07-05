const express = require('express');
const mongoose = require('mongoose');
const Game = require('./models/game.model.js');
const gameRoute = require('./routes/game.route.js');
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/api/games', gameRoute);

app.get('/', (request, response) => {
    response.send("Hello from Node API");
});

mongoose.connect("mongodb+srv://raniedev:Fl1ZBh8SMo7SJ3yo@gamesdb.kjck0em.mongodb.net/Node-API?retryWrites=true&w=majority&appName=GamesDB").then(() => {
    console.log("Connected to database!");
    app.listen(3000, () =>{
        console.log("Server is running on port 3000.");
    })    
}).catch(() => {
    console.log("Connection failed.");
});