const iFrame = document.getElementById("gameWindow");
const northButton = document.getElementById("North");

(() => {
  const gameScreen = null;

  iFrame.addEventListener("load", () => 
{  
   gameScreen = iFrameContext.document.getElementById("gameWorldMap").style; 
   console.log(gameScreen);
});
})();

function moveNorth()
{
gameScreen.transform = "translateY(-50px)";
} 
