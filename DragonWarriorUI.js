const iFrame = document.getElementById("gameWindow").contentWindow;
const northButton = document.getElementById("North");

  iFrame.addEventListener("load", () => 
{  
   gameScreen = iFrame.document.getElementById("gameWorldMap").style; 
   gameScreen.transition = "transform 0.5s linear";
});



function moveNorth()
{
    gameScreen.transform = gameScreen.transform + "translateY(16px)";  
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
