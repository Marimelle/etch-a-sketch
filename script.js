/* GLOBAL VARIABLES */

// Value of color picker
let color = "black";
// Number of columns/rows based on slider
let gridSize = 16;
// Node of the input slider for grid size
const rangeValue = document.getElementById("slider");
// Node of the color picker
const colorPicker = document.getElementById("color");
// Get node for sketch-container div
const sketchPad = document.querySelector(".sketch-container");

// Node of the button for random color
const randomBtn = document.querySelector(".random-color");
randomBtn.addEventListener("click", randomize);
// Boolean variable is true if user wants random color
// False if user unclicked the Random button or chose
// a color from color picker
let randomSelected = false;

// Draw the grid items in the sketch-container with
// the default 16 x 16 grid size
drawGrid(gridSize);

function paintBox(e){
  e.target.style.backgroundColor = color;
}

function randomize(){
  // toggle randomize css class
  // return random color 
}
/************************************************
 * Display grid size beside input slider and
 * draw grid items in the sketch-container every
 * time the value of the input slider changes
 */
rangeValue.oninput = function showGridSize() {
  // Get node of p showing the value of slider
  const sliderValue = document.getElementById("grid-size");
  // Convert value to number and assign to gridSize
  gridSize = +this.value;
  // Show grid size chosen beside the slider
  sliderValue.innerHTML = `${gridSize}x${gridSize}`;
  drawGrid(gridSize);
};

/***********************************************
 * Get the color selected from the color picker
 * every time the selection is changed
 */
colorPicker.onchange = function selectColor() {
  // If color is selected from color picker,
  // remove randomize class from random button
  randomBtn.classList.remove("randomize");
  randomSelected = false;
  color = this.value;
  console.log(color);
}

/****************************************************
 * Create divs inside sketch-container where there
 * are equal number of columns and rows. The argument
 * gridSize will be the number of columns and rows.
 */
function drawGrid(gridSize){
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
    box.addEventListener('mouseenter', paintBox);
  }
}