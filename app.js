console.log('hi!');
var internalBoard = [
  ['','',''],
  ['','',''],
  ['','','']
];
var playerTurn = 'X';


var randomOGen = function() {
  var row = Math.floor(Math.random() * 4);
  var column = Math.floor(Math.random() * 4);


}

var userGen = function(cellidArray, cell) {
  let description = document.getElementsByClassName('description')[0];
  if(isFilled(cell) > 0) {
    description.textContent = 'Oops! It seems like this space is occupied. Please select another cell'
  } else {
    cell.textContent = playerTurn;
    internalBoard[Number(cellidArray[0])-1][Number(cellidArray[1])-1] = playerTurn;
    playerTurn = playerTurn === "X" ? playerTurn = "O" : playerTurn = "X";
    description.textContent = 'It\'s Player ' + playerTurn + '\'s turn! Please click any cell to continue'
    return;
  }
}

var cellClickHandler = function(cellIdName) {
  var cell = document.getElementById(cellIdName);
  var cellidArray = cellIdName.slice(-2).split("");
  userGen(cellidArray, cell);
  var letter;
  letter = rowChecker(cellidArray[0]-1);
  if(!!letter) {
    victorySpeech(letter);
  }
  letter = columnChecker(cellidArray[1]-1);
  if(!!letter) {
    victorySpeech(letter);
  }

  letter = LeftdiagonalChecker();
  if(!!letter) {
    victorySpeech(letter);
  }

  letter = rightDiagonalChecker();
  if(!!letter) {
    victorySpeech(letter);
  }

  if (boardFilled()) {
    victorySpeech('');
  }


  //columnChecker(cellidArray[1]);

}


var boardFilled = function() {
  var currentRowArray = document.getElementsByClassName('ticTacToe')[0].children[0].children;

  for (var i = 0; i < currentRowArray.length; i++) {
    var aRow = currentRowArray[i].children;
    for (var j = 0; j < aRow.length; j++) {
      if(!aRow[j].textContent.length) {
        return false;
      }
    }
  }
  return true;
}

var isFilled = function(cell) {
  const item = cell.textContent;

  if(!item.length){
    return false;
  } else {
    return true;
  }

}

var rowChecker = function(rowNumber) {
  const rowIndex = Number(rowNumber);
  console.log('entered')
  var checker = null;
  console.log(internalBoard);
  for(var i = 0; i < internalBoard[rowIndex].length; i++) {
    if(!internalBoard[rowIndex][i].length) {
      return '';
    } else if (checker === null){
      checker = internalBoard[rowIndex][i];
      console.log('hi');
    } else if (checker !== internalBoard[rowIndex][i]) {
      return '';
    } else {
      continue;
    }
  }

  var winningRow = document.getElementsByClassName('ticTacToe')[0].children[0].children[rowIndex];
  winningRow.style.backgroundColor = 'Green';

  return checker;

}

var columnChecker = function(columnNumber) {
  const columnIndex = Number(columnNumber);
  var checker = null;
  for(var i = 0; i < internalBoard[columnIndex].length; i++) {
    if(!internalBoard[i][columnIndex].length) {
      return null;
    } else if (checker === null){
      checker = internalBoard[i][columnIndex];
    } else if (checker !== internalBoard[i][columnIndex]) {
      return null;
    } else {
      continue;
    }
  }

  console.log('cell1' + (columnIndex + 1));
  var winningCell1 = document.getElementsByClassName('cell1' + (columnIndex + 1))[0];
  var winningCell2 = document.getElementsByClassName('cell2' + (columnIndex + 1))[0];
  var winningCell3 = document.getElementsByClassName('cell3' + (columnIndex + 1))[0];
  winningCell1.style.backgroundColor = 'Green';
  winningCell2.style.backgroundColor = 'Green';
  winningCell3.style.backgroundColor = 'Green';

  return checker;

}

var LeftdiagonalChecker = function() {
  var checker = internalBoard[0][0];
  if(checker === ''){
    return '';
  }
  if(internalBoard[1][1] !== checker) {
    return '';
  } else if (internalBoard[2][2] !== checker) {
    return '';
  } else {

    var winningCell1 = document.getElementsByClassName('cell11')[0];
    var winningCell2 = document.getElementsByClassName('cell22')[0];
    var winningCell3 = document.getElementsByClassName('cell33')[0];
    winningCell1.style.backgroundColor = 'Green';
    winningCell2.style.backgroundColor = 'Green';
    winningCell3.style.backgroundColor = 'Green';

    return checker;
  }

}

var rightDiagonalChecker = function() {
  var checker = internalBoard[0][2];
  if(checker === ''){
    return '';
  }
  if(internalBoard[1][1] !== checker) {
    return '';
  } else if (internalBoard[2][0] !== checker) {
    return '';
  } else {

    var winningCell1 = document.getElementsByClassName('cell13')[0];
    var winningCell2 = document.getElementsByClassName('cell22')[0];
    var winningCell3 = document.getElementsByClassName('cell31')[0];
    winningCell1.style.backgroundColor = 'Green';
    winningCell2.style.backgroundColor = 'Green';
    winningCell3.style.backgroundColor = 'Green';

    return checker;
  }

}

var victorySpeech = function(string) {
  let description = document.getElementsByClassName('description')[0];

  if(string.length) {
    description.textContent = 'Player ' + string + ' wins! Play Again?';
  } else {
    description.textContent = 'Tie game! Play Again?';
  }

  let button = document.getElementsByClassName('playAgain')[0].children[0];
  button.textContent = 'Play Again!';
}

var buttonClickHandler = function(id) {
  var table = document.getElementsByClassName('ticTacToe')[0].children[0];
  console.log(table);
  table.style.backgroundColor = 'none';
  var internalBoard = [
    ['','',''],
    ['','',''],
    ['','','']
  ];
  var playerTurn = 'X';
  playGame();


}

var playGame = function() {

  let description = document.getElementsByClassName('description')[0];
  description.textContent = 'Welcome! Please click any cell to continue';



}

playGame();