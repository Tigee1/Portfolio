const iFrame = document.getElementById("gameWindow").contentWindow;
const northButton = document.getElementById("North");

  iFrame.addEventListener("load", () => 
{  
   gameScreen = iFrame.document.getElementById("gameWorldMap").style; 
});


function moveNorth()
{
gameScreen.transform = gameScreen.transform + "translateY(50px)";
} 

function moveWest()
{
gameScreen.transform = gameScreen.transform + "translateX(50px)";
} 

function moveEast()
{
gameScreen.transform = gameScreen.transform + "translateX(-50px)";
} 

function moveSouth()
{
gameScreen.transform = gameScreen.transform + "translateY(-50px)";
} 
