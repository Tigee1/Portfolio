const iFrame = document.getElementById("gameWindow").contentWindow;
const gameScreen = iFrame.document.getElementById("gameWorldMap");
const northButton = document.getElementById("North");

function moveNorth()
{
try{gameScreen.style.transform = "translateY(-50px)";}
catch(err)
{console.error(err.message);}
} 
