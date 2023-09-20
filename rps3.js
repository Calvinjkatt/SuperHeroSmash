//this is the implementation of the client side part of the project 

const url = "http://localhost:3001/get";

const response1Display = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
let userChoice
let response1
let result

//var possibleChoices = document.querySelectorAll('button')

// to get all possible choices that are button when it is clicked elements (const is same as let)

const possibleChoices = document.querySelectorAll('button when it is clicked')

    // grab button when it is clickeds to match what button when it is clicked is clicked (e) means event

    .forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
        userChoice = e.target.id;
        userChoiceDisplay.innerHTML = userChoice;
        generateComputerChoice();
        outcome();

    }))




    


//ask the computer to generate a random number 


$('.options').ready(function() {

    $.get("http://localhost:3001/get", function (data) {

        response1Display.innerHTML = data;

    })
})



//this fuction determines the result of who (between the player and computer) won the game



function outcome() {

    var response1 = data;

    if (response1 === userChoice) {

        result = 'Battle Draw';
    }

    //telling the client what to display if the server sends back a result that equals flash

    if (response1 === 'Flash' && userChoice === 'Superman') {

        result = 'Battle Won!';
    }

    if (response1 === 'Flash' && userChoice === 'Batman') {

        result = 'Battle Lost';
    }

    //telling the client what to display if the server sends back a result that equals Batman

    if (response1 === 'Batman' && userChoice === 'Flash') {

        result = 'Battle Won!';
    }

    if (response1 === 'Batman' && userChoice === 'Superman') {

        result = 'Battle Lost';
    }

    //telling the client what to display if the server sends back a result that equals Superman

    if (response1 === 'Superman' && userChoice === 'Batman') {

        result = 'Battle Won!';
    }

    if (response1 === 'Superman' && userChoice === 'Flash') {

        result = 'Battle Lost';
    }


    resultDisplay.innerHTML = result;
}





//this function keeps track of the score 

























//this function creates the picture that is given to the flash button when it is clicked and appends it to the div for the computerb box

function Flash() {

    var newImg = document.createElement("img");
    $(newImg).attr("src", "img/flash.jpg");
    $(newImg).attr("class", "imgflash")

    $(".playerb ").append(newImg);
}
//this function creates the picture that is given to the batman button when it is clicked and appends it to the div for the computerb box
function Batman() {

    var newImg = document.createElement("img");
    $(newImg).attr("src", "img/batman.jpg");
    $(newImg).attr("class", "imgbatman");

    $(".playerb ").append(newImg);
}
//this function creates the picture that is given to the superman button when it is clicked and appends it to the div for the computerb box
function Superman() {

    var newImg = document.createElement("img");
    $(newImg).attr("src", "img/superman.jpg");
    $(newImg).attr("class", "imgsuperman");

    $(".playerb ").append(newImg);
}

