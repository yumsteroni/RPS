function getComputerChoice()
{
    let selection = Math.floor(Math.random() * 3) + 1;
    if (selection === 1)
    {
        return "rock";
    }
    else if (selection === 2)
    {
        return "paper";
    }
    else if (selection === 3)
    {
        return "scissors";
    }
}


function playRound(computerSelection, playerSelection)
{
    //user picks rock game
    if (computerSelection === "rock" 
    && playerSelection.toLowerCase() === "rock")
    {
        tie++;
        return "Tie!";
    }
    else if (computerSelection === "paper" 
    && playerSelection.toLowerCase() === "rock")
    {
        lose++;
        return "You Lose! Paper beats Rock.";
    }
    else if (computerSelection === "scissors" 
    && playerSelection.toLowerCase() === "rock")
    {
        win++;
        return "You Win! Rock beats Scissors";
    }

    //player picks paper
    else if (computerSelection === "rock" 
    && playerSelection.toLowerCase() === "paper")
    {
        win++;
        return "You Win! Paper beats Rock.";
    }
    else if (computerSelection === "paper" 
    && playerSelection.toLowerCase() === "paper")
    {
        tie++;
        return "Tie!";
    }
    else if (computerSelection === "scissors" 
    && playerSelection.toLowerCase() === "paper")
    {
        lose++;
        return "You Lose! Scissors beats Paper.";
    }

    //player picks scissors
    else if (computerSelection === "rock" 
    && playerSelection.toLowerCase() === "scissors")
    {
        lose++;
        return "You Lose! Rock beats Scissors!";
    }
    else if (computerSelection === "paper" 
    && playerSelection.toLowerCase() === "scissors")
    {
        win++;
        return "You Win! Scissors beats Paper.";
    }
    else if (computerSelection === "scissors" 
    && playerSelection.toLowerCase() === "scissors")
    {
        tie++;
        return "Tie!";
    }
    else
    {
        return "Not an option"
    }
}

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => button.addEventListener('click', (e) => {
    let computerSelection = getComputerChoice();
    let playerSelection = e.target.id;
    content.textContent = playRound(computerSelection,playerSelection);
    count.textContent = `Wins: ${win} Losses: ${lose} Tie: ${tie}`;
    if (win === 5){
        count.textContent = 'Player Wins!';
        win = 0;
        lose = 0;
        tie = 0;
    }
    if (lose === 5){
        count.textContent = 'Computer Wins!';
        win = 0;
        lose = 0;
        tie = 0;
    }


}))


let win = 0;
let lose = 0;
let tie = 0;

const results = document.querySelector('#results');

const count = document.createElement('div');
count.textContent = `Wins: ${win} Losses: ${lose} Tie: ${tie}`;
const content = document.createElement('div');
results.appendChild(content);
results.appendChild(count);
