const iFrame = document.getElementById("gameWindow").contentWindow;
const gameScreen = iFrame.document.getElementById("gameWorldMap");
const northButton = document.getElementById("North");

function moveNorth()
{
gameScreen.style.top = "50px";
} 