const iFrame = document.getElementById("gameWindow").contentWindow;
const northButton = document.getElementById("North");

  iFrame.addEventListener("load", () => 
{  
   gameScreen = iFrame.document.getElementById("gameWorldMap").style; 
   console.log(gameScreen);
});


function moveNorth()
{
gameScreen.transform = "translateY(-50px)";
} 
