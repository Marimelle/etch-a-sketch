/* GLOBAL VARIABLES */

// Value of color picker
let pixelColor = "";
// Number of grids based on slider
let gridSize = 16;
// Node of the input slider for grid size
let rangeValue = document.getElementById("slider");
// Draw the grid items in the sketch-container with
// the default 16 x 16 grid size
drawGrid(gridSize);

/************************************************
 * Display grid size beside input slider and
 * draw grid items in the sketch-container every
 * time the value of the input slider changes
 */
rangeValue.oninput = function showGridSize() {
  // Get node of p showing the value of slider
  let sliderValue = document.getElementById("grid-size");
  // Convert value to number and assign to gridSize
  gridSize = +this.value;
  // Show grid size chosen beside the slider
  sliderValue.innerHTML = `${gridSize}x${gridSize}`;
  drawGrid(gridSize);
};

/****************************************************
 * Create divs inside sketch-container where there
 * are equal number of columns and rows. The argument
 * gridSize will be the number of columns and rows.
 */
function drawGrid(gridSize){
  // Get node for sketch-container div
  let sketchPad = document.querySelector(".sketch-container");
  // Change number of columns & rows to gridSize
  sketchPad.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  sketchPad.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  // Delete all children of current sketchPad to reset
  sketchPad.innerHTML = "";

  // Create the divs as grid items of the sketch-container
  for(let i = 0; i < gridSize**2; i++){
    // Create 1 div and append as child of sketchPad
    let box = document.createElement("div");
    sketchPad.appendChild(box);
    box.setAttribute("style",
      `border: none;
      background-color: white;
      padding: 0;
      margin: 0;`);
  }
}