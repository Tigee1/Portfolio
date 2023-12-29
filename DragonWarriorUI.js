const iFrame = document.getElementById("gameWindow").contentWindow;
const gameScreen = iFrame.getElementById("gameWorldMap").style;
const northButton = document.getElementById("North");

alert(gameScreen)
function moveNorth()
{
gameScreen.transform = "translateY(-50px)";
} 
