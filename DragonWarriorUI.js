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
    alert(characterSprite)
    alert(characterSprite.src)
    characterSprite.src = "Sprites/CharacterUp.png";  
    alert(characterSprite)
    alert(characterSprite.src)
}
 
function moveWest()
{
    gameScreen.transform = gameScreen.transform + "translateX(16px)";
} 

function moveEast()
{
    gameScreen.transform = gameScreen.transform + "translateX(-16px)";
} 

function moveSouth()
{
    gameScreen.transform = gameScreen.transform + "translateY(-16px)";
} 
