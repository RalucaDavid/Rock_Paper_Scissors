let numberWinsPlayer = 0;
let numberWinsComputer = 0;

function getRandomNumber()
{
    return Math.floor(Math.random()*3);
}

function getComputerChoice()
{
    number = getRandomNumber();
    if(number==0)
      return "Rock";
    else if(number==1)
      return "Paper";
    return "Scissors";
}

function round(playerSelection, computerSelection)
{
    if(playerSelection=="Rock")
    {
        if(computerSelection=="Paper")
          return "Computer wins";
        else if(computerSelection=="Scissors")
          return "Player wins";
        return "Equality";
    }
    else if(playerSelection=="Paper")
    {
        if(computerSelection=="Paper")
          return "Equality";
        else if(computerSelection=="Scissors")
          return "Computer wins";
        return "Player wins";
    }
    else  /* playerSelection=="Scissors" */
    {
        if(computerSelection=="Paper")
          return "Player wins";
        else if(computerSelection=="Scissors")
          return "Equality";
        return "Computer wins";
    }
}

function calculateScore(result)
{
    if(result=="Computer wins")
        numberWinsComputer++;
    else if(result=="Player wins")
        numberWinsPlayer++;
}

function finalResult()
{
   if(numberWinsComputer==5)
     return "The Computer won!"
  else if(numberWinsPlayer==5)
     return "The Player won!"
  return "";
}

function showRoundData(playerChoice,computerChoice)
{
    const result = document.querySelector('#result');
    player = "The player chose:" + playerChoice;
    computer = "The computer chose:" + computerChoice;
    scoreStatus = "The score is: " + numberWinsPlayer + "-" + numberWinsComputer;
    final = finalResult();
    result.innerHTML = player + "<br>" + computer + "<br>" + scoreStatus + "<br>" + final;
    result.style.margin = '10px';
}

function playRound(playerChoice)
{
  const computerChoice = getComputerChoice();
  const result = round(playerChoice, computerChoice);
  calculateScore(result);
  showRoundData(playerChoice,computerChoice);
}

function playGame()
{
  const buttonRock = document.querySelector('#Rock');
  const buttonPaper = document.querySelector('#Paper');
  const buttonScissors= document.querySelector('#Scissors');
   buttonRock.onclick = function() {
    playRound('Rock');
   };
   buttonPaper.onclick = function() {
    playRound('Paper')
   };
   buttonScissors.onclick = function() {
    playRound('Scissors');
  };
}
playGame();
