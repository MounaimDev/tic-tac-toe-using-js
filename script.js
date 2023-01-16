let squares = document.querySelectorAll('.square');
let winnerDisplay = document.getElementById('winner');
let resetButton = document.getElementById('reset');
let xScoreDisplay = document.getElementById('x-score');
let oScoreDisplay = document.getElementById('o-score');
let xScore = 0;
let oScore = 0;
let currentPlayer = 'X';

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', function() {
    if (this.textContent === '') {
      this.textContent = currentPlayer;

      if (checkForWinner()) {
        winnerDisplay.textContent = `Player ${currentPlayer} wins!`;
        if(currentPlayer === 'X') {
            xScore++;
            xScoreDisplay.textContent = xScore;
        } else {
            oScore++;
            oScoreDisplay.textContent = oScore;
        }
      } else if (checkForDraw()) {
        winnerDisplay.textContent = 'It\'s a draw!';
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  });
}

resetButton.addEventListener('click', function() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
    }
    winnerDisplay.textContent = '';
    currentPlayer = 'X';
});

function checkForWinner() {
  let winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
  ];
  
for (let i = 0; i < winningCombinations.length; i++) {
    if (squares[winningCombinations[i][0]].textContent === currentPlayer &&
    squares[winningCombinations[i][1]].textContent === currentPlayer &&
    squares[winningCombinations[i][2]].textContent === currentPlayer) {
return true;
}
}
return false;
}

function checkForDraw() {
for (let i = 0; i < squares.length; i++) {
  if (squares[i].textContent === '') {
  return false;
  }
}
return true;
}
