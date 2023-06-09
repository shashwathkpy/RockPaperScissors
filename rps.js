//DOM
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const result = document.querySelector("#result");

const heading = document.createElement('h2');

rockButton.addEventListener('click', function(e)
{
    playerSelection = "Rock";
    game();
});

paperButton.addEventListener('click', function(e)
{
    playerSelection = "Paper";
    game();});

scissorsButton.addEventListener('click', function(e)
{
    playerSelection = "Scissors";
    game();
});

function game()
{
    // This runs the round and places result string into heading
    heading.textContent = playRound(playerSelection, getComputerChoice());
    if(playerWin)
    {
        heading.style.color = 'green';
    }
    if(computerWin)
    {
        heading.style.color = 'red';
    }
    if(tie)
    {
        heading.style.color = 'black';
    }
}

result.appendChild(heading);

// Game Functions
const DEF = [["Rock", "Paper", "Scissors"], ["Paper", "Scissors", "Rock"], ["Scissors", "Rock", "Paper"]];

function getComputerChoice()
{
    let random = Math.floor(Math.random()*3);
    return DEF[random][random];
}

let playerScore = 0;
let computerScore = 0;
let playerWin = false;
let computerWin = false;
let tie = false;

function playRound(playerSelection, computerSelection)
{
    
    let ps = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    let cs = computerSelection;

    if(playerScore == 5)
    {
        return "Player Wins Game! " + "Final Score: " 
        + playerScore + " WINS - " + computerScore + " LOSSES";
    }
    if(computerScore == 5)
    {
        return "Computer Wins Game! " + "Final Score: " 
        + playerScore + " WINS - " + computerScore + " LOSSES";
    }

    playerWin = false;
    computerWin = false;
    tie = false;

    console.log(ps + " " + cs);
    for(let i = 0; i < DEF.length; i++)
    {
        if(ps == DEF[i][0])
        {
            for(let j = 0; j < DEF.length; j++)
            {
                if(cs == DEF[i][0])
                {
                    tie = true;
                    return "Its a Tie!";
                }
                if(cs == DEF[i][1])
                {
                    computerWin = true;
                    computerScore++;
                    return "You Lose! " + cs + " beats " + ps + " " 
                    + playerScore + " WINS - " + computerScore + " LOSSES";

                }
                if(cs == DEF[i][2])
                {
                    playerWin = true;
                    playerScore++;
                    return "You Win! " + ps + " beats " + cs + " " 
                    + playerScore + " WINS - " + computerScore + " LOSSES";
                }
            }
        }
    }
    return "Fix the loop!";
}