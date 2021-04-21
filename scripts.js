//TO DO NEXT: replace alert in loop with mouseover 
currentPlayer = 1;
spaces = document.querySelectorAll(".space");

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

/*testing loop to see if it works before adding mouseover funciton*/

    for (let i = 0; i < spaces.length; i++) {

        spaces[i].onclick = () => {
            alert("you have clicked space " + i)
        }
    }