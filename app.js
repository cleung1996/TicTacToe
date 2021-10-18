console.log('hi!');

var randomOGen = function() {
  var row = Math.floor(Math.random() * 4);
  var column = Math.floor(Math.random() * 4);



}

var userXGen = function() {
  const selected = document.querySelectorAll('td');
  let description = document.getElementsByClassName('description')[0];
  description.textContent = 'It\'s your turn! Please click any cell to continue'
  for(let i = 0; i < selected.length; i++) {
    selected[i].onclick = function(event) {
      event.preventDefault();
      var selectedClassName = selected[i].className;
      if(isFilled(selectedClassName) > 0) {
        description.textContent = 'Oops! It seems like this space is occupied. Please select another cell'
      } else {
        document.getElementsByClassName(selectedClassName)[0].textContent = "X";
        return;
      }
    }
  }
}

var boardFilled = function(table) {
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

var isFilled = function(cellClassName) {
  const item = document.getElementsByClassName(cellClassName)[0].textContent;

  if(!item.length){
    return false;
  } else {
    return true;
  }

}

var columnChecker = function(columnNumber) {


}

var rowChecker = function(rowClass) {

}

var diagonalChecker = function(diagonalClass) {

}

var playGame = function() {
  var stopPlaying = false;
  var counter = 0;

  // while(counter < 2) {
  //   userXGen();
  //   console.log('pls')
  //   console.log(boardFilled());
  //   counter++;
  // }

  if(counter < 9) {
    playGame();
  }

  // while(!boardFilled()) {
  //   userXGen();
  //   console.log('test');
  // }


  console.log('Thanks for playing');


}

playGame();