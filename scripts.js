/*TO DO NEXT: fix errors
-Currently red mouseout works but also erases chips in filled spaces
-Yellow mouseout doesn't work at all
-Only switches current player once from red to yellow and won't switch back or place any chips*/

currentPlayer = 1;

//all the spaces on the board
spaces = document.querySelectorAll(".space");

//columns on the board from left to right, spaces top to bottom
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


  //sets clickedSpace in colNum fuction to the space the player clicked on (space[i])
  spaces[i].onclick = function() {
    colNum(i)
  };

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


/*loops through columns to find the one that includes the space the player clicked on and 
then should run a function for placing the chip in that column*/
function colNum(clickedSpace) {
  for (let i = 0; i < allCol.length; i++) {
    if (allCol[i].includes(clickedSpace)) {
      console.log(clickedSpace);
      placeChip(i);
      break;

    }


  }
}

//function for detecting where to place the chip in the clicked column
function placeChip(colNumber) {
  //loops through spaces in column from bottom to top (6 spaces: 5,4,3,2,1,0)
  for (let i = 5; i > 0; i--) {

    //if it loops to the top space and it is filled then nothing happens
    if (i == 0 && spaces[allCol[colNumber][i]].classList.contains("filled")) {
      break;

    }

    /*Detects bottomost availble space and places chip by checking if i is filled and if 
    the spot above is not filled. If space above is not filled it will run function to update space with chip*/
    else if (spaces[allCol[colNumber][i]].classList.contains("filled") && !spaces[allCol[colNumber][i -= 1]].classList.contains("filled")) {
      updateSpace(colNumber, i);
      break;
    }
    //if i is the bottom spot on the board and it isn't filled then run function for updating the space
    else if (!spaces[allCol[colNumber][i]].classList.contains("filled") && i == 5) {
      updateSpace(colNumber, i);

      break;
    }
  }
}


//updates available space (found with placeChip function) with player color and filled class, and changes current player
function updateSpace(colNumber, spaceNumber) {
    if (currentPlayer == 1) {
        spaces[allCol[colNumber][spaceNumber]].classList.add("p1", "filled");
        currentPlayer = 2;
    }
    else if (currentPlayer == 2) {
        spaces[allCol[colNumber][spaceNumber]].classList.add("p2", "filled");
        currentPlayer = 1;
    }
}