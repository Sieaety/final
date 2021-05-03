//TO DO NEXT: function that detects space the user clicked
currentPlayer = 1;
spaces = document.querySelectorAll(".space");

//colunms on the board from left to right
col0 = [0, 7, 14, 21, 28, 35];
col1 = [1, 8, 15, 22, 29, 36];
col2 = [2, 9, 16, 23, 30, 37];
col3 = [3, 10, 17, 24, 31, 38];
col4 = [4, 11, 18, 25, 32, 39];
col5 = [5, 12, 19, 26, 33, 40];
col6 = [6, 13, 20, 27, 34, 41];

//array of all columns
allCol = [col0, col1, col2, col3, col4, col5, col6];

//looping through all spaces on the board

for (let i = 0; i < spaces.length; i++) {
  
  //changes color of space to the current player color when they hover over it

  if (currentPlayer == 1) {
    spaces[i].onmouseover = function() {
      spaces[i].classList.add("p1");
    }
    spaces[i].onmouseout = function() {
      spaces[i].classList.remove("p1");
    }
    
  } else if (currentPlayer == 2) {
    spaces[i].onmouseover = function() {
      spaces[i].classList.add("p2");
    }
    spaces[i].onmouseout = function() {
      spaces[i].classList.remove("p2");
    }
  }
}