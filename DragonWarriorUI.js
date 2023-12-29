const iFrame = document.getElementById("gameWindow").contentWindow.document.getElementById("gameWorldMap").stlye;
const northButton = document.getElementById("North");


function moveNorth()
{
iFrame.transform = "translateY(-50px)";
} 
