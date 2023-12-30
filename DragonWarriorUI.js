const iFrame = document.getElementById("gameWindow").contentWindow;
const northButton = document.getElementById("North");

  iFrame.addEventListener("load", () => 
{  
   gameScreen = iFrame.document.getElementById("gameWorldMap").style; 
});


function moveNorth()
{
    
    gameScreen.transition = "transform 5s linear";
    gameScreen.transform = gameScreen.style.transform + "translateX(16px)";
    gameScreen.webkitTransform = gameScreen.style.transform + "translateX(16px)";
    gameScreen.MozTransform = gameScreen.style.transform + "translateX(16px)";
    gameScreen.OTransform = gameScreen.style.transform + "translateX(16px)";
    
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
