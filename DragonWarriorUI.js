const iFrame = document.getElementById("gameWindow").contentWindow;
const gameScreen = iFrame.document.getElementById("gameWorldMap");
const northButton = document.getElementById("North");

function moveNorth()
{
alert('a')
gameScreen.style.transform = "translateY(-50px)";
} 
