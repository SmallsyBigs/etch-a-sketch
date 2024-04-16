const gridContainer = document.querySelector(".gridContainer");
const resetBtn = document.querySelector("#getResetBtn");
const newGridBtn = document.querySelector("#getSizeBtn");
for(let i = 0; i < 256; i++){

    const gameGrid = document.createElement("div");
    gameGrid.classList.add("gameGrid");
    gridContainer.appendChild(gameGrid);
    
}
const gameGrid = document.querySelectorAll(".gameGrid");

gameGrid.forEach(gameGrid => gameGrid.addEventListener("mouseenter", function(){
    gameGrid.style.backgroundColor = "red";
}, {once : true}))

gameGrid.forEach(gameGrid => gameGrid.addEventListener("mouseleave", function(){
    const newRandomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    gameGrid.style.backgroundColor = newRandomColor;
}, {once : true}))


newGridBtn.addEventListener("click", function(){
    
    newSize = prompt("Choose number per side (max 100)");
    if(newSize > 0 && newSize <= 100) {
    }
    else{
        return alert("Wrong number :(");
    }

    while (gridContainer.firstChild){
        gridContainer.firstChild.remove();
    }

    for(let i = 0; i < newSize * newSize; i++){
        const gameGrid = document.createElement("div");
        gameGrid.classList.add("gameGrid");
        gridContainer.appendChild(gameGrid);
        gameGrid.style.width = `calc(100% / ${newSize})`;
        gameGrid.style.height = `calc(100% / ${newSize})`;
        }
})

