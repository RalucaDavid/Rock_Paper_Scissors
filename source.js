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
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
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

function calculateScore(result,numberWinsPlayer, numberWinsComputer)
{
    if(result=="Computer wins")
        numberWinsComputer++;
    else if(result=="Player wins")
        numberWinsPlayer++;
    return [numberWinsPlayer, numberWinsComputer];
}

function verifyPlayerChoice(playerChoice)
{
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
    while((playerChoice!="Rock")&&(playerChoice!="Paper")&&(playerChoice!="Scissors"))
    {
        playerChoice = prompt("The current choice is incorrect. Make another choice for the game:");
        playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
    }
    return playerChoice;
}

function showRoundData(playerChoice,numberWinsPlayer,computerChoice,numberWinsComputer)
{
    player = "The player chose:" + playerChoice;
    console.log(player);
    computer = "The computer chose:" + computerChoice;
    console.log(computer);
    scoreStatus = "The score is: " + numberWinsPlayer + "-" + numberWinsComputer;
    console.log(scoreStatus);
}

function playGame()
{
   numberWinsPlayer = 0;
   numberWinsComputer = 0;
   for(let index=1;index<=5; index++)
   {
        playerChoice = prompt("Make a choice for the game:");
        playerChoice = verifyPlayerChoice(playerChoice);
        computerChoice = getComputerChoice();
        result = round(playerChoice,computerChoice);
        updatedScores = calculateScore(result,numberWinsPlayer,numberWinsComputer);
        numberWinsPlayer = updatedScores[0];
        numberWinsComputer = updatedScores[1];
        showRoundData(playerChoice,numberWinsPlayer,computerChoice,numberWinsComputer);
   }
   if(numberWinsComputer>numberWinsPlayer)
        console.log("The computer won.");
   else if(numberWinsPlayer>numberWinsComputer)
        console.log("The player won.");
   else 
        console.log("Equality");
}

playGame();
