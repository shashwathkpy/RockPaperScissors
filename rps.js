const DEF = [["Rock", "Paper", "Scissors"], ["Paper", "Scissors", "Rock"], ["Scissors", "Rock", "Paper"]];
let playerSelection = "rOcK";
let playerWin = false;
let computerWin = false;

function getComputerChoice()
{
    let random = Math.floor(Math.random()*3);
    return DEF[random][random];
}

function playRound(playerSelection, computerSelection)
{
    let ps = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    let cs = computerSelection;

    console.log(ps + " " + cs);
    for(let i = 0; i < DEF.length; i++)
    {
        if(ps == DEF[i][0])
        {
            for(let j = 0; j < DEF.length; j++)
            {
                if(cs == DEF[i][0])
                {
                    return "Its a Tie!";
                }
                if(cs == DEF[i][1])
                {
                    computerWin = true;
                    return "You Lose! " + cs + " beats " + ps;
                }
                if(cs == DEF[i][2])
                {
                    playerWin = true;
                    return "You Win! " + ps + " beats " + cs;
                }
            }
        }
    }
    return "Fix the loop!";
}

function game()
{
    let playerScore = 0;
    let computerScore = 0;
    
    for(let i = 0; i < 5; i++)
    {
        playerSelection = prompt();
        playRound(playerSelection, getComputerChoice());
        
        if(playerWin)
        {
            playerScore++;
            playerWin = false;
        }
        if(computerWin)
        {
            computerScore++;
            computerWin = false;
        }
        console.log(playerScore + " WINS - " + computerScore + " LOSSES");
    }
    console.log("Final Score: " + playerScore + " WINS - " + computerScore + " LOSSES");
}
