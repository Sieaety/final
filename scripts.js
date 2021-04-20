//TO DO NEXT: write loop so mouseover fucntion works on all spaces
currentPlayer = 1;

/*testing function to change space color to current player color 
when they hover over top left space on board 
(before attempting to apply function to all spaces)*/

if (currentPlayer == 1) {
  document.querySelector(".first").onmouseover = function() {
    document.querySelector(".first").classList.add("p1");
  }
  document.querySelector(".first").onmouseout = function() {
    document.querySelector(".first").classList.remove("p1");
  }
}