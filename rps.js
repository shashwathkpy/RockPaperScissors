function getComputerChoice()
{
    const choice = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random()*3);
    return choice[random];
}