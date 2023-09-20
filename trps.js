 
 
let userPoint = 0;
let computerPoint = 0 ;
const userScore_span = document.getElementById("user-points");
const computerScore_span = document.getElementById("computer-points");
const scoreBoard_div = document.querySelector(".score-board");
const gameBoard_div = document.querySelector(".gameboard");
 
 
 
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
let userChoice
let computerChoice
 
// to get all possible choices that are button elements (const is same as let)
 
const possibleChoices = document.querySelectorAll('button')
 
// grab buttons to match what button is clicked (e) means event
 
.forEach(possibleChoices => possibleChoices.addEventListener ('click', (e) =>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
 
}))
 
function generateComputerChoice(){
 
const randomNumber = parseInt(Math.floor(Math.random() *3) +1); // generating random computer choice
console.log(randomNumber)
 
 
if (randomNumber === 1) {
computerChoice ='Batman'
var newImg= document.createElement("img");
$(newImg).attr("src","img/batman.jpg");
$(newImg).attr("class","imgbatman");

$(".computerb").append(newImg);
}
 
if (randomNumber === 2) {
computerChoice ='Superman'

    var newImg= document.createElement("img");
    $(newImg).attr("src","img/superman.jpg");
    $(newImg).attr("class","imgsuperman");
 
    $(".computerb").append(newImg);


}
 
if (randomNumber === 3) {
computerChoice ='Flash'

var newImg= document.createElement("img");
   $(newImg).attr("src","img/flash.jpg");
    $(newImg).attr("class","imgflash")
 
    $(".computerb").append(newImg);

}

 
computerChoiceDisplay.innerHTML = computerChoice // displaying random computer choice
 
return computerChoice;
 
 
}
 
 
 
//this fuction determines the result of who (between the player and computer) won the game
 
/*function getResult() {
 
    switch(true) {
        case (computerChoice == userChoice): result = 'Battle Draw'; break;
        case (computerChoice == 'Flash' && userChoice == 'Superman'): result = 'Battle Won!'; break;
        case (computerChoice == 'Flash' && userChoice == 'Batman'): result = 'Battle Lost'; break;
        case (computerChoice == 'Batman' && userChoice == 'Flash'): result = 'Battle Won!'; break;
        case (computerChoice == 'Batman' && userChoice == 'Superman'): result = 'Battle Lost'; break;
        case (computerChoice == 'Superman' && userChoice == 'Batman'): result = 'Battle Won!'; break;
        case (computerChoice == 'Superman' && userChoice == 'Flash'): result = 'Battle Lost'; break;
        default: result = "error";
    } */
 
 


 
function getResult() {
 if (computerChoice === userChoice) {
 
 
    setTimeout( function ( ) { alert( "Battle Draw" ); }, 10 );}
if (computerChoice === 'Flash' && userChoice === 'Superman') {
 
 
    win();
 
}
 
if (computerChoice === 'Flash' && userChoice === 'Batman') {
 
    lose();
 
    }
 
if (computerChoice === 'Batman' && userChoice === 'Flash') {
 
 
 
    win();
 
 
}
if (computerChoice === 'Batman' && userChoice === 'Superman') {
 
    lose();
}
if (computerChoice === 'Superman' && userChoice === 'Batman') {
 
 
 
 win();
 
 
}
 
if (computerChoice === 'Superman' && userChoice === 'Flash') {
 
 
    lose();
 
}
 



 
}
 
 function lose(){

    do{
    computerPoint++;
userScore_span.innerHTML=userPoint;
computerScore_span.innerHTML=computerPoint;
result_div.innerHTML= userPoint + computerPoint ;

    }while(computerPoint<4)

    alert("Battle lost")
 }

 function win() {

    do{
userPoint++;
userScore_span.innerHTML=userPoint;
computerScore_span.innerHTML=computerPoint;
result_div.innerHTML= userPoint + computerPoint ;
    }while(userPoint < 4)

    alert("Battle Won")

 }
 
 
function flash() {
   //$(".playerb").style.display = "block";
    var newImg= document.createElement("img");
   $(newImg).attr("src","img/flash.jpg");
    $(newImg).attr("class","imgflash")
 
    $(".playerb").append(newImg);
}
//this function creates the picture that is given to the batman button and appends it to the div for the player box
function batman() {
   // $(".playerb").style.display = "block";
    var newImg= document.createElement("img");
    $(newImg).attr("src","img/batman.jpg");
    $(newImg).attr("class","imgbatman");
 
    $(".playerb").append(newImg);
}
//this function creates the picture that is given to the superman button and appends it to the div for the player box
function superman() {
    //$(".playerb").style.display = "block";
    var newImg= document.createElement("img");
    $(newImg).attr("src","img/superman.jpg");
    $(newImg).attr("class","imgsuperman");
 
    $(".playerb").append(newImg);
}











