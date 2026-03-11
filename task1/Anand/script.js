//selecting all required elemets
let buttons = document.querySelectorAll(".choice");
let userChoiceText = document.getElementById("yourchoice");
let compChoiceText = document.getElementById("computerchoice");
let resultText = document.getElementById("results");

let userScoreText = document.getElementById("your");
let compScoreText = document.getElementById("computer");
//taking initial score 0 for both
let userScore = 0;
let compScore = 0;

//loop to traverse same fn on all buttons
for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function () {

        if (userScore == 5 || compScore == 5) {
            return;
        }

        let userChoice = buttons[i].dataset.choice;
//generating random choice from comp
        let options = ["stone", "paper", "scissors"];
        let randomNumber = Math.floor(Math.random() * 3);
        let computerChoice = options[randomNumber];

        
        userChoiceText.innerText = "Your Choice: " + userChoice;
        compChoiceText.innerText = "Computer Choice: " + computerChoice;

        
        if (userChoice == computerChoice) {

            resultText.innerText = "It's a Draw!";

        } 
        else if (
            (userChoice == "stone" && computerChoice == "scissors") ||
            (userChoice == "paper" && computerChoice == "stone") ||
            (userChoice == "scissors" && computerChoice == "paper")
        ) {

            resultText.innerText = "You Win this round!";
            userScore = userScore + 1;

        } 
        else {

            resultText.innerText = "Computer Wins this round!";
            compScore = compScore + 1;

        }

      
        userScoreText.innerText = userScore
        compScoreText.innerText = compScore
//criteria to finish the game 
        if (userScore == 5) {
            resultText.innerText = "YOU WON THE GAME!";
        }

        if (compScore == 5) {
            resultText.innerText = "COMPUTER WON THE GAME!";
        }

    });

}