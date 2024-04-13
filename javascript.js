const gridContainer = document.querySelector(".gridContainer");

for(let i = 0; i < 256; i++){
const gameGrid = document.createElement("div");
gameGrid.classList.add("gameGrid");
gridContainer.appendChild(gameGrid);

gameGrid.addEventListener("mouseenter", function(){
    gameGrid.style.backgroundColor = "red";
})

gameGrid.addEventListener("mouseleave", function(){
    const newRandomColor = "#" + Math.floor(Math.random()*16777215).toString(16)
    gameGrid.style.backgroundColor = newRandomColor
    })
}

