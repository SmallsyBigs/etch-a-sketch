const gridContainer = document.querySelector(".gridContainer");
const sizeBtn = document.querySelector("#getSizeBtn");
const resetBtn = document.querySelector("#getResetBtn");
let gridSize = 16;

function makeGrid(){
    for(let i = 0; i < gridSize * gridSize; i++){
        gameGrid = document.createElement("div");
        gameGrid.classList.add("gameGrid");
        gridContainer.appendChild(gameGrid);
        gameGrid.style.width = `calc(100% / ${gridSize})`;
        gameGrid.style.height = `calc(100% / ${gridSize})`;
}
}
makeGrid();

function resetGrid(){
    while (gridContainer.firstChild) {
        gridContainer.firstChild.remove();
    }
}

sizeBtn.addEventListener("click", function(){
    gridSize = prompt("Choose grid size per side (max 100)");
    resetGrid();
    makeGrid();
})

resetBtn.addEventListener("click", function(){
    resetGrid()
})