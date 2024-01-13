const iFrame = document.getElementById("gameWindow").contentWindow;
const northButton = document.getElementById("North");
let x = 0;
let y = 0;
position = `Position: (${x}, ${y})`;
console.log(position)
import({"./Coordinates.js"});
const obj = JSON.parse(textCoordinates);

  iFrame.addEventListener("load", () => 
{  
   gameScreen = iFrame.document.getElementById("gameWorldMap").style;
   characterSprite =  iFrame.document.getElementById("characterSpriteDown");
   gameScreen.transition = "transform 0.5s linear";
});

let findLoc = function()
{
for (i=0; i<obj.coordinates.length; i++)
{
	if(x==obj.coordinates[i].X && y==obj.coordinates[i].Y)
    {
    	return obj.coordinates[i].Loc;
    }
}
}

function moveNorth()
{
    y = y + 1;
    position = `Position: (${x}, ${y})`;
    gameScreen.transform = gameScreen.transform + "translateY(16px)";
    characterSprite.src = "../Sprites/CharacterUp.png"; 
    findLoc();
}
 
function moveWest()
{
    x = x - 1;
    position = `Position: (${x}, ${y})`;
    gameScreen.transform = gameScreen.transform + "translateX(16px)";
    characterSprite.src = "../Sprites/CharacterLeft.png"; 
    findLoc();
} 

function moveEast()
{
    x = x + 1;
    position = `Position: (${x}, ${y})`;
    gameScreen.transform = gameScreen.transform + "translateX(-16px)";
    characterSprite.src = "../Sprites/CharacterRight.png"; 
    findLoc();
} 

function moveSouth()
{
    y = y - 1;
    position = `Position: (${x}, ${y})`;
    gameScreen.transform = gameScreen.transform + "translateY(-16px)";
    characterSprite.src = "../Sprites/CharacterDown.png"; 
    findLoc();
} 
