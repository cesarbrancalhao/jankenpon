let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

const scoreInfo = document.getElementById('scoreInfo');
const scoreMessage = document.getElementById('scoreMessage');
const playerScorePara = document.getElementById('playerScore');
const computerScorePara = document.getElementById('computerScore');
const playerChoice = document.getElementById('playerChoice');
const computerChoice = document.getElementById('computerChoice');
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');

rockBtn.addEventListener('click', () => handleClick('Rock'));
paperBtn.addEventListener('click', () => handleClick('Paper'));
scissorsBtn.addEventListener('click', () => handleClick('Scissors'));

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = 'tie';
    }
    if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock')
    ) {
        playerScore++;
        roundWinner = 'player';
    }
    if (
        (computerSelection === 'Rock' && playerSelection === 'Scissors') ||
        (computerSelection === 'Scissors' && playerSelection === 'Paper') ||
        (computerSelection === 'Paper' && playerSelection === 'Rock')
    ) {
        computerScore++;
        roundWinner = 'computer';
    }
    updateScoreMessage(roundWinner, playerSelection, computerSelection);
}

function updateScoreMessage(winner, playerSelection, computerSelection) {
    if (winner === 'player') {
        scoreMessage.textContent = `${playerSelection}
         beats ${computerSelection.toLowerCase()}`;
        return
    }
    if (winner === 'computer') {
        scoreMessage.textContent = `${playerSelection}
         is beaten by ${computerSelection.toLowerCase()}`;
        return
    }

    scoreMessage.textContent = `${playerSelection}
     ties with ${computerSelection.toLowerCase()}`;
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

function updateChoices(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'Rock':
            playerChoice.textContent = '✊';
            break;
        case 'Paper':
            playerChoice.textContent = '✋';
            break;
        case 'Scissors':
            playerChoice.textContent = '✌';
            break;
    }

    switch (computerSelection) {
        case 'Rock':
            computerChoice.textContent = '✊';
            break;
        case 'Paper':
            computerChoice.textContent = '✋';
            break;
        case 'Scissors':
            computerChoice.textContent = '✌';
            break;
    }
}

function updateScore() {
    if (roundWinner === 'tie') {
        scoreInfo.textContent = "It's a tie!";
    } else if (roundWinner === 'player') {
        scoreInfo.textContent = 'You won!';
    } else if (roundWinner === 'computer') {
        scoreInfo.textContent = 'You lost!';
    }

    playerScorePara.textContent = `Player: ${playerScore}`;
    computerScorePara.textContent = `Computer: ${computerScore}`;
}

function handleClick(playerSelection) {
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    updateChoices(playerSelection, computerSelection);
    updateScore();
}