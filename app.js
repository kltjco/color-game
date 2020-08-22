var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#rgb");
var h1 = document.querySelector("h1");
var messageDisplay = document.querySelector("#message")
var resetButton = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	// Mode Buttons
	for(var i = 0; i < modeButtons.length; i++){

		modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
		reset();
		});
	}

	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	for(var i = 0; i < squares.length; i++){
		h1.style.backgroundColor = "steelblue"
		colorDisplay.textContent = pickedColor;
		squares[i].style.backgroundColor = colors[i];

		squares[i].addEventListener("click", function(){

			var clickedColor = this.style.backgroundColor;

			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = "#232323"
				messageDisplay.textContent = "Try Again.";
			}
		});
	}

	reset();

}

resetButton.addEventListener("click", function(){
	reset();
});

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];

}

function changeColors(color){

	for(var i = 0; i < colors.length; i++){
		squares[i].style.backgroundColor = color;
	}

}

function generateRandomColors(num){

	// make an array
	var arr = [];

	// add num random colors to array
	for(var i = 0; i < num; i++){
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256); 
		var b = Math.floor(Math.random() * 256);
		var rgb = "rgb(" + r + ", " + g + ", " + b + ")";
		arr.push(rgb);

	}

	// return array
	return arr;
}

function reset(){

		colors = generateRandomColors(numSquares);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
		resetButton.textContent = "New Colors"
		messageDisplay.textContent = "";

		for(var i = 0; i < squares.length; i++){
			if(colors[i]){
				squares[i].style.display = "block";
				squares[i].style.backgroundColor = colors[i];
			} else {
				squares[i].style.display = "none";
			}
			
		}
		h1.style.backgroundColor = "steelblue";
}








