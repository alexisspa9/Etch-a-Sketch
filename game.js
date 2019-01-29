// store the grid container
let grid = document.getElementById("gridContainer");
// Store the button elements
let clearButton = document.getElementById("clear");
let newButton = document.getElementById("new");
clearButton.addEventListener("click", clearGrid);
newButton.addEventListener("click", newGrid);
let rows = [];
let cols = [];
/* 
 * Starts the game. 
 * @param {number} size The size of the grid for example 16x16. 
*/
function gameStart(size = 16) {
	// creates the grid__box elements and appends them to the grid container
	for(let i = 0; i < size; i++) {
		rows[i] = document.createElement("div");
		rows[i].classList.add("row");
		rows[i].style.height = `calc(100% / ${size})`;
		grid.appendChild(rows[i]);
	}
	for(let i = 0; i < size; i++) {
	   for(let j = 0; j < size; j++) {
            cols[j] = document.createElement("div");
            cols[j].classList.add("cols");
            rows[i].appendChild(cols[j]);
            
            rows[i].children[j].addEventListener('mouseover', changeColor);
            
        }
	}
}

function changeColor(e) {
	let colors = ["red", "yellow", "blue", "green", "aqua", "fuchsia"];
	e.target.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
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
	var myNode = document.getElementById("gridContainer");
	while (myNode.firstChild) {
	    myNode.removeChild(myNode.firstChild);
	}
	gameStart();
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

gameStart();

