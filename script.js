/* GLOBAL VARIABLES */

// Value of color picker
let pixelColor = "";
// Number of grids based on slider
let gridSize = 16;
// Node of the input slider for grid size
let rangeValue = document.getElementById("slider");

/******************************************
 *  Display grid size beside input slider
 */
rangeValue.oninput = function showGridSize() {
  // Get node of p showing the value of slider
  let sliderValue = document.getElementById("grid-size");
  // Convert value to number and assign to gridSize
  gridSize = +this.value;
  // Show grid size chosen beside the slider
  sliderValue.innerHTML = `${gridSize}x${gridSize}`;
};
