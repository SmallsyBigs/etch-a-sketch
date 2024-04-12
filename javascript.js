const gridContainer = document.querySelector(".mainContainer");
const gameGrid = document.createElement("div");
gameGrid.classList.add("gameGrid");
gridContainer.appendChild(gameGrid);

gameGrid.onmouseenter = function(){
    gameGrid.setAttribute("style", "background-color:red;");
}
gameGrid.onmouseout = function(){
    gameGrid.setAttribute("style", "background-color:blue;");
}
