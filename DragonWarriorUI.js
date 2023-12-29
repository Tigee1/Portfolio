const iFrame = document.getElementById("gameWindow").contentWindow;
const gameScreen = iFrame.document.getElementById("gameWorldMap");
const northButton = document.getElementById("North");

iFrame.addEventListener("load", function()
{
    iFrame.contentWindow.document.getElementById("gameWorldMap").style.transform  = "translateY(-50px)";
});
function moveNorth()
{
gameScreen.style.transform = "translateY(-50px)";
} 
