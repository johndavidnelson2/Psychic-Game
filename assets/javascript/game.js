var wins = 0;
var losses = 0;
var guessesLeft=10;
var yourGuesses = [];
var gameLetter="";
//alert ("I'm running.");
function game (){

    
    for (var i=0; i<10; i++){
        
    
        if (guessesLeft>0){
            promptUser();
            
        } 
        else {
        alert ("Game over.");
        }
        //output scores to HTML
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        document.getElementById("guessesLeft").innerHTML = "Guesses left: " + guessesLeft;
        document.getElementById("yourGuesses").innerHTML = "Your guesses: " + yourGuesses.toString();
    }
}

function promptUser(){
    // generate a random number from 1-26
    var charNum = Math.floor(Math.random() * 26) + 1;
    // convert number to character by adding 96
    gameLetter = String.fromCharCode(charNum + 96);
    //alert ("tested");
    // get a input from the user
    var guess = prompt("What is your guess?");
    // convert input to lower case
    guess = guess.toLowerCase();
    // add guess to end of yourGuesses array
        yourGuesses.push(guess);
        guessesLeft--;
        if (gameLetter===guess){
        alert("You win.");
        wins++;
        }
        else {
        alert("Guess again"); 
        losses++;
        }
}
//call function
game();

