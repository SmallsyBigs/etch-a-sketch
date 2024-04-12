const gridContainer = document.querySelector(".gridContainer");

for(let i = 0; i < 256; i++){
const gameGrid = document.createElement("div");
gameGrid.classList.add("gameGrid");
gridContainer.appendChild(gameGrid);
gameGrid.onmouseenter = function(){
    gameGrid.style.backgroundColor = "red";
}
gameGrid.onmouseout = function(){
    gameGrid.style.backgroundColor = "blue";
}
}

