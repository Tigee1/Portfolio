const iFrame = document.getElementById("gameWindow").contentWindow.

iFrame.document.getElementById("gameWorldMap").addEventListener("load", myFunction);

const northButton = document.getElementById("North");


function moveNorth()
{
gameScreen.transform = "translateY(-50px)";
} 

function myFunction()
{
    alert("h")
}
