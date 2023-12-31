const iFrame = document.getElementById("gameWindow").contentWindow;
const northButton = document.getElementById("North");
let x = 0;
let y = 0;
position = `Position: (${x}, ${y})`;
console.log(position)

  iFrame.addEventListener("load", () => 
{  
   gameScreen = iFrame.document.getElementById("gameWorldMap").style;
   characterSprite =  iFrame.document.getElementById("characterSpriteDown");
   gameScreen.transition = "transform 0.5s linear";
});



function moveNorth()
{
    y = y + 1;
    position = `Position: (${x}, ${y})`;
    gameScreen.transform = gameScreen.transform + "translateY(16px)";
    characterSprite.src = "Sprites/CharacterUp.png"; 
    console.log(position) 
}
 
function moveWest()
{
    x = x - 1;
    position = `Position: (${x}, ${y})`;
    gameScreen.transform = gameScreen.transform + "translateX(16px)";
    characterSprite.src = "Sprites/CharacterLeft.png"; 
    console.log(position) 
} 

function moveEast()
{
    x = x + 1;
    position = `Position: (${x}, ${y})`;
    gameScreen.transform = gameScreen.transform + "translateX(-16px)";
    characterSprite.src = "Sprites/CharacterRight.png"; 
    console.log(position) 
} 

function moveSouth()
{
    y = y - 1;
    position = `Position: (${x}, ${y})`;
    gameScreen.transform = gameScreen.transform + "translateY(-16px)";
    characterSprite.src = "Sprites/CharacterDown.png"; 
    console.log(position) 
} 
