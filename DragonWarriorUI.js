const iFrame = document.getElementById("gameWindow").contentWindow;
const northButton = document.getElementById("North");

  iFrame.addEventListener("load", () => 
{  
   gameScreen = iFrame.document.getElementById("gameWorldMap").style; 
});


function moveNorth()
{
gameScreen.transform = gameScreen.transform + "translateY(-50px)";
} 
