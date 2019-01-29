/* 
 * Starts the game. 
 * @param {number} size The size of the grid for example 16x16. 
*/
function gameStart(size) {
	// store the grid container
	let grid = document.getElementById("gridContainer");
	// Store the button elements
	let clearButton = document.getElementById("clear");
	let newButton = document.getElementById("new");
	clearButton.addEventListener("click", clearGrid);
	newButton.addEventListener("click", newGrid);
	// declare width and height size of box element
	let widthSize = 960 / size;
	let heightSize = 500 / size;

	// creates the grid__box elements and appends them to the grid container
	for(let i = 0; i < (size * size); i++) {
		let ele = gridElement();
		ele.style.width = `${widthSize}px`;
		ele.style.height = `${heightSize}px`;
		grid.appendChild(ele);
		
		// width: calc(960px / 4);
  		// height: calc(960px / 4);
	}


	// Run the Mouse over Listeners
	runListeners();





}

/* 
 * Creates a grid element.  
*/
function gridElement() {
	let ele = document.createElement("DIV");
	ele.classList.add("grid__box");
	return ele;
}


/* 
 * Clears the Grid
*/
function clearGrid() {
	let boxes = Array.from(document.querySelectorAll(".grid__box"));
	for(let box of boxes) {
		box.style.background = "white";
	}
}

/* 
 * Creates a new Grid
*/
function newGrid() {
	// ask user for input
	let userInput = prompt("please enter a number between 1-64");
	// remove all elements from gridContainer
	var myNode = document.getElementById("gridContainer");
	while (myNode.firstChild) {
	    myNode.removeChild(myNode.firstChild);
	}
	// run start game with the user input
	if (parseInt(userInput) && userInput > 0 && userInput < 64) {
		gameStart(userInput);
	} else {
		newGrid();
	}
}

function runListeners() {
	// store box elements in an array
	let boxes = Array.from(document.querySelectorAll(".grid__box"));
	for(let i = 0; i < boxes.length; i++) {
		boxes[i].addEventListener('mouseover', changeColor);
	}
}

function changeColor(e) {
	let colors = ["red", "yellow", "blue", "green", "aqua", "fuchsia"];
	e.target.style.background = colors[Math.floor(Math.random() * colors.length)];
}



gameStart(16);

