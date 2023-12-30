const iFrame = document.getElementById("gameWindow").contentWindow;
const northButton = document.getElementById("North");

  iFrame.addEventListener("load", () => 
{  
   gameScreen = iFrame.document.getElementById("gameWorldMap").style;
   characterSprite =  iFrame.document.getElementById("characterSpriteDown");
   gameScreen.transition = "transform 0.5s linear";
});



function moveNorth()
{
    gameScreen.transform = gameScreen.transform + "translateY(16px)";
    characterSprite.src = "Sprites/CharacterUp.png";  
}
 
function moveWest()
{
    gameScreen.transform = gameScreen.transform + "translateX(16px)";
    characterSprite.src = "Sprites/CharacterLeft.png"; 
} 

function moveEast()
{
    gameScreen.transform = gameScreen.transform + "translateX(-16px)";
    characterSprite.src = "Sprites/CharacterRight.png"; 
} 

function moveSouth()
{
    gameScreen.transform = gameScreen.transform + "translateY(-16px)";
    characterSprite.src = "Sprites/CharacterDown.png"; 
} 
