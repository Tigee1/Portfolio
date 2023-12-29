const iFrame = document.getElementById("gameWindow").contentWindow.document.getElementById("gameWorldMap").style;
const northButton = document.getElementById("North");


function moveNorth()
{
iFrame.transform = "translateY(-50px)";
} 
