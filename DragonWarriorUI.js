const iFrame = document.getElementById("gameWindow").contentWindow;
const northButton = document.getElementById("North");

  iFrame.addEventListener("load", () => 
{  
   gameScreen = iFrame.document.getElementById("gameWorldMap").style; 
});


function moveNorth()
{
setInterval(() => {
  gameScreen.style.transform = "translateX(" + (16 * Math.floor(((1.0 / 1.0) * Math.random()))) + "px)";
}, 1.0 * 1000);
} 

function moveWest()
{
gameScreen.transform = gameScreen.transform + "translateX(16px)";
} 

function moveEast()
{
gameScreen.transform = gameScreen.transform + "translateX(-16px)";
} 

function moveSouth()
{
gameScreen.transform = gameScreen.transform + "translateY(-16px)";
} 
