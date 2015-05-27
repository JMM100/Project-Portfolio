/**
* Created with Website.
* User: JMorales
* Date: 2015-05-26
* Time: 05:57 PM
* To change this template use Tools | Templates.
*/


/the boxes where you play the game/
var spot1 = document.getElementById("spot1");
spot1.addEventListener("click", playGame);

var spot2 = document.getElementById("spot2");
spot2.addEventListener("click", playGame);

var spot3 = document.getElementById("spot3");
spot3.addEventListener("click", playGame);

var spot4 = document.getElementById("spot4");
spot4.addEventListener("click", playGame);

var spot5 = document.getElementById("spot5");
spot5.addEventListener("click", playGame);

var spot6 = document.getElementById("spot6");
spot6.addEventListener("click", playGame);

var spot7 = document.getElementById("spot7");
spot7.addEventListener("click", playGame);

var spot8 = document.getElementById("spot8");
spot8.addEventListener("click", playGame);

var spot9 = document.getElementById("spot9");
spot9.addEventListener("click", playGame);

/so x and o can take turns/
var turnNum = 1;
var xScoreNum = 0;
var oScoreNum = 0;



/X and O/
function playGame(){
  if(turnNum%2===0){
    this.innerHTML = "X";
  }
  else{
    this.innerHTML = "O";
    
  }
  turnNum++;

}