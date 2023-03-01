const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const getUserChoice = (callback) => {
  readline.question('Rock, paper, or scissors?\n', (userInput) => {
    userInput = userInput.toLowerCase();
    
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      callback(userInput);
    } else {
      console.log('Error: Invalid input');
      getUserChoice(callback);
    }
  });
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (userChoice === 'rock' && computerChoice === 'scissors' || userChoice === 'paper' && computerChoice === 'rock' || userChoice === 'scissors' && computerChoice === 'paper') {
    return 'User wins!';
  } else {
    return 'Computer wins!';
  }
};

const playGame = () => {
  getUserChoice((userChoice) => {
    const computerChoice = getComputerChoice();
    
    console.log(`User choice: ${userChoice}`);
    console.log(`Computer choice: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
    
    readline.close();
  });
};

playGame();
