var colors = generateRandomColors(6);

var numSquares = 6;
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
        //pick 3 new colors for easy mode
        colors = generateRandomColors(numSquares);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
            for(var i = 0; i < squares.length; i++){
                if(colors[i]){
                    squares[i].style.backgroundColor = colors[i];
                } else {
                    squares[i].style.display = "none";
                }
            }
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
        //pick 6 new colors for hard mode
        colors = generateRandomColors(numSquares);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
            for(var i = 0; i < squares.length; i++){
                    squares[i].style.backgroundColor = colors[i];
                    squares[i].style.display = "block";
                }
            
});

resetButton.addEventListener("click", function(){
    //generate colors
    colors = generateRandomColors(numSquares);
    //pick new rand color
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors";

    messageDisplay.textContent = "";
    //change squares color
    for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    //color sqaures
    squares[i].style.backgroundColor = colors[i]

    //listen click
    squares[i].addEventListener("click", function(){
        //grab clicked color
        var clickedColor =this.style.backgroundColor;
        //compare
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!"
            resetButton.textContent = "Play Again?"
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    });
}

function changeColors(color){
    //loop all squares
    for(var i = 0; i < squares.length; i++){
    //change all sqares to pickedColor
    squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generateRandomColors(num){
    //array
    var arr = []
    //repeat num times
    for(var i = 0; i < num; i++){
        //get rand color and push into arr
        arr.push(randomColor())
    }
    //return
    return arr;
}

function randomColor(){
    //pick a red
    var r = Math.floor(Math.random() * 256);
    //pick a green
    var g = Math.floor(Math.random() * 256);
    //pick a blue
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}