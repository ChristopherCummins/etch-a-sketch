makeRows(16, 16);
 
const gridcontainer = document.getElementById("gridContainer");

function makeRows(rows, cols) {
  gridContainer.style.setProperty('--grid-rows', rows);
  gridContainer.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    gridContainer.appendChild(cell).className = "gridItem";
  };
};

let gridItems = document.querySelectorAll('div#gridContainer > div');
gridItems.forEach((gridItem) => {gridItem.addEventListener('mouseover', change)});

function change(e) {
  e.target.style.backgroundColor = "black";
} 

function clearGrid() {
  gridItems.forEach((gridItem) => {gridItem.style.backgroundColor = "coral";})
}

let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML=this.value;
  makeRows(slider.value, slider.value);
}

let cellSize = ((slider.value) / 100) + "%";
console.log(cellSize);
