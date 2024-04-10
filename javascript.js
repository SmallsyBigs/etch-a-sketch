const gridContainer = document.querySelector(".gridContainer");

for(let i = 0; i < 16; i++){
const gridDiv = document.createElement("div");
gridDiv.classList.add("gameGrid");
gridContainer.appendChild(gridDiv);
}
