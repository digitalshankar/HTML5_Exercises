var colors = [
    "rgb(255, 0, 0)", 
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;
 
for(var i = 0; i < squares.length; i++){
 //add initial colors to squares   
    squares[i].style.background = colors[i];
    
    //add click listesners to squares
    squares[i].addEventListener("click", function() {
      // Grab the color of the clicked square
        var clickedColor = this.style.backgroundColor;
    //compare color to pickedColor
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
      } else {
        	this.style.background = "#232323";
            messageDisplay.textContent = "Try Again";
    }
  });
}

function changeColors(color){
    //LOOP THROUGH ALL squares
    for(var i = 0; i < squares.length; i++) {
        //change each color to match given color
        squares[i].style.background = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}