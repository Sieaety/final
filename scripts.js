/*TO DO NEXT: winning function
FIXED:first part of if statement in placeChip is not running properly-
loop was set to stop for i > 0 so the condition of i == 0 was never fufilled, changed loop to i >= 0
FIXED:Currently red mouseout works but also erases chips in filled spaces/Yellow mouseout doesn't work at all-
tried splitting mouseover and mouseout into two seperate functions instead of if/else statement, not sure why this worked but it did
FIXED:Won't place more than two chips in one column- 
Set i to a variable (available) so variable value could later be subtracted from without changing the value of i*/

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
  
/*add player color class (class p1 or p2) to space when player hovers over it, if the spaces is already 
filled the function returns as hovering colors only necessary on empty spaces*/
spaces[i].onmouseover = function () {
            if (spaces[i].classList.contains("filled")) {
                return;
            }
            else {
                if (currentPlayer == 1) {
                    spaces[i].classList.add("p1");
                }
                else {
                    spaces[i].classList.add("p2");
                }
            }

        }

/*removes player's color (class p1 or p2) from empty space when they mouse of it, if the spaces is already 
filled the function returns so filled spaces won't appear empty after player mouses over them*/
        spaces[i].onmouseout = function () {
            if (spaces[i].classList.contains("filled")) {
                return;
            }
            else {
                spaces[i].classList.remove("p1", "p2");
            }
        }

}
/*loops through columns to find the one that includes the space the player clicked on and 
then should run a function for placing the chip in that column*/
function colNum(clickedSpace) {
  for (let i = 0; i < allCol.length; i++) {
    if (allCol[i].includes(clickedSpace)) {
      placeChip(i);
      break;

    }


  }
}

//function for detecting where to place the chip in the clicked column
function placeChip(colNumber) {
  
  //loops through spaces in column from bottom to top (6 spaces: 5,4,3,2,1,0)
  for (let i = 5; i >= 0; i--) {
    available = i;
    
    //if it loops to the top space and it is filled then nothing happens
    if (i == 0 && spaces[allCol[colNumber][i]].classList.contains("filled")) {
      alert("This column is full! You can't go here!");
      console.log("alert")
        return;
    }

    /*Detects bottomost availble space and places chip by checking if i is filled and if 
    the spot above (available) is not filled. If space above is not filled it will run function to update space with chip*/
    else if (spaces[allCol[colNumber][i]].classList.contains("filled") && !spaces[allCol[colNumber][available -= 1]].classList.contains("filled")) {
      updateSpace(colNumber, available);
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

//array of arrays listing all the possible combinations of winning spots on the board
winCombos = [
  
    //horizontal combinations
    [0, 1, 2, 3],
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
    [7, 8, 9, 10],
    [8, 9, 10, 11],
    [9, 10, 11, 12],
    [10, 11, 12, 13],
    [14, 15, 16, 17],
    [15, 16, 17, 18],
    [16, 17, 18, 19],
    [17, 18, 19, 20],
    [21, 22, 23, 24],
    [22, 23, 24, 25],
    [23, 24, 25, 26],
    [24, 25, 26, 27],
    [28, 29, 30, 31],
    [29, 30, 31, 32],
    [30, 31, 32, 33],
    [31, 32, 33, 34],
    [35, 36, 37, 38],
    [36, 37, 38, 39],
    [37, 38, 39, 40],
    [38, 39, 40, 41],
  
  //vertical combinations
    [0, 7, 14, 21],
    [7, 14, 21, 28],
    [14, 31, 28, 35],
    [1, 8, 15, 22],
    [8, 15, 22, 29],
    [15, 22, 29, 36],
    [2, 9, 16, 23],
    [9, 16, 23, 30],
    [16, 23, 20, 37],
    [3, 10, 17, 24],
    [10, 17, 24, 31],
    [17, 24, 31, 38],
    [4, 11, 18, 25],
    [11, 18, 25, 32],
    [18, 25, 32, 39],
    [5, 12, 19, 26],
    [12, 19, 26, 33],
    [19, 26, 33, 40],
    [6, 13, 20, 27],
    [13, 20, 27, 34],
    [20, 27, 34, 41],

    //diagonal combinations bottom left to top right
    [14, 22, 30, 38],
    [7, 15, 23, 31],
    [15, 23, 31, 39],
    [0, 8, 16, 24],
    [8, 16, 24, 32],
    [16, 24, 32, 40],
    [1, 9, 17, 25],
    [9, 17, 25, 33],
    [17, 25, 33, 41],
    [2, 10, 18, 26],
    [10, 18, 26, 34],
    [3, 11, 19, 27],

    //diagonal combinations top left to bottom right
    [3, 9, 15, 21],
    [4, 10, 16, 22],
    [10, 16, 22, 28],
    [5, 11, 17, 23],
    [11, 17, 23, 29],
    [17, 23, 29, 35],
    [6, 12, 18, 24],
    [12, 18, 24, 30],
    [18, 24, 30, 36],
    [13, 19, 25, 31],
    [19, 25, 31, 37],
    [20, 26, 32, 38]
  ];


function resetGame() {
  currentPlayer = 1;
    for (let i = 0; i < spaces.length; i++) {
        spaces[i].classList.remove("p1", "p2", "filled");
    }
}

//function for changing color palette to original Connect 4 palette
function originalColor() {
    document.querySelector("style").innerHTML = ".p1 { background-color: #ff0000;} .p2 { background-color: #ffd000;} .gameBoard { background-color: #2054ff; border-color: #2054ff;}";
}

//function for changing color palette to WSU colors
function wsuColor() {
    document.querySelector("style").innerHTML = ".p1 { background-color: #981e32;} .p2 { background-color: #5e6a71;} .gameBoard { background-color: #ffb81c; border-color: #ffb81c;}";
}
