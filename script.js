 const gridcontainer = document.getElementById("gridContainer");

function setGridSize(size) {
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function fillGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList = "grid-element"
    gridElement.addEventListener("mouseover", change);
    gridContainer.appendChild(gridElement);
  }
}

function change(e) {
  e.target.style.backgroundColor = "black";
} 

function clearGrid() {
  const gridArray = Array.from(gridContainer.childNodes);
  gridArray.forEach((element) => {
    gridContainer.removeChild(element);
  });
  changeSize(slider.value)
}

let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML=this.value;
  $(gridContainer).empty();
  changeSize();

}

function changeSize() {
  let newSize = slider.value;
  setGridSize(newSize);
  fillGrid(newSize);
  }

  changeSize(16); 
