var dice1 = document.querySelector(".dice1");
var dice2 = document.querySelector(".dice2");
var dice1Number = Math.floor(Math.random() * 6) + 1;
var dice2Number = Math.floor(Math.random() * 6) + 1;

switch (dice1Number) {
  case 1:
    dice1.setAttribute("src", "images/Dice-1.svg");
    break;
  case 2:
    dice1.setAttribute("src", "images/Dice-2.svg");
    break;
  case 3:
    dice1.setAttribute("src", "images/Dice-3.svg");
    break;
  case 4:
    dice1.setAttribute("src", "images/Dice-4.svg");
    break;
  case 5:
    dice1.setAttribute("src", "images/Dice-5.svg");
    break;
  case 6:
    dice1.setAttribute("src", "images/Dice-6.svg");
    break;
}

switch (dice2Number) {
  case 1:
    dice2.setAttribute("src", "images/Dice-1.svg");
    break;
  case 2:
    dice2.setAttribute("src", "images/Dice-2.svg");
    break;
  case 3:
    dice2.setAttribute("src", "images/Dice-3.svg");
    break;
  case 4:
    dice2.setAttribute("src", "images/Dice-4.svg");
    break;
  case 5:
    dice2.setAttribute("src", "images/Dice-5.svg");
    break;
  case 6:
    dice2.setAttribute("src", "images/Dice-6.svg");
    break;
}

if(dice1Number > dice2Number){
  document.querySelector("h3").innerHTML = ">> Congratulations! Player 1 won the game <<";
}else if(dice1Number < dice2Number){
  document.querySelector("h3").innerHTML = ">> Congratulations! Player 2 won the game <<";
}else{
  document.querySelector("h3").innerHTML = ">> Woahhh! Match Tied <<";
}
