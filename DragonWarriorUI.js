const iFrame = document.getElementById("gameWindow").contentWindow.document.getElementById("gameWorldMap").style;
alert(iFrame)
const gameScreen = iFrame.style;
const northButton = document.getElementById("North");


function moveNorth()
{
gameScreen.transform = "translateY(-50px)";
} 
