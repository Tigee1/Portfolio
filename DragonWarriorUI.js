const iFrame = document.getElementById("gameWindow");
const northButton = document.getElementById("North");

iFrame.addEventListener("load", () => 
{  
  const iFrameContext = iFrame.contentWindow;  
  const gameScreen = iFrameContext.document.getElementById("gameWorldMap").style; 
  alert(gameScreen)
});

function moveNorth()
{
gameScreen.transform = "translateY(-50px)";
} 

