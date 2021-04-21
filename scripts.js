//TO DO NEXT: begin coding functions for actual game play, start by making arrays spaces for individual columns and array of all of the columns together
currentPlayer = 2;
spaces = document.querySelectorAll(".space");

/*looping through all spaces on the board*/

for (let i = 0; i < spaces.length; i++) {
  
  /*changes color of space to the current player color when they hover over it*/

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