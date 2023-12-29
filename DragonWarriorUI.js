const iFrame = document.getElementById("gameWindow").contentWindow; //.document.getElementById("gameWorldMap").style;
const northButton = document.getElementById("North");

alert(iFrame)
function moveNorth()
{
iFrame.transform = "translateY(-50px)";
} 
