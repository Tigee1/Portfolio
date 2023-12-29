const iFrame = document.getElementById("gameWindow").contentWindow.document.getElementById("gameWorldMap");
const gameScreen = iFrame.style;
const northButton = document.getElementById("North");

alert(gameScreen)
function moveNorth()
{
gameScreen.transform = "translateY(-50px)";
} 
