//this is the implementation of the server side part of the project 


const { json } = require('body-parser');
const { response } = require('express');
var express = require('express');
var app = express();


//this function will generate a random number between 1 and 3 

app.get("/get", (req, res) => {


    const randomNumber = parseInt(Math.floor(Math.random() * 3) + 1)  // generating random computer choice
    console.log(randomNumber)


    if (randomNumber === 1) {
        computerChoice = 'Batman'

        res.send(computerChoice)
    }


    if (randomNumber === 2) {
        computerChoice = 'Superman'

        res.send(computerChoice)
    }


    if (randomNumber === 3) {
        computerChoice = 'Flash'
        

        res.send(computerChoice)
    }

    // computerChoiceDisplay.innerHTML = computerChoice // displaying random computer choice // 

}).listen(3001, function () {

    console.log('this server is running')
})


