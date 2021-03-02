var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = colors[pickColor()]; 
var displayMessage = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyBtn");
var hardButton = document.querySelector("#hardBtn");
var rgbDisplay = document.querySelector("#colorDisplay")
var numberOfSquares = 6;


easyButton.addEventListener("click", function(){
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");

    numberOfSquares = 3;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = colors[pickColor()]; 
    for (var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    rgbDisplay.textContent = pickedColor;
})

hardButton.addEventListener("click", function(){
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");

    numberOfSquares = 6;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = colors[pickColor()]; 
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
        
    }
    rgbDisplay.textContent = pickedColor;
})

resetButton.addEventListener("click", function(){
    colors = generateRandomColors(numberOfSquares);
    pickedColor = colors[pickColor()]; 
    resetButton.textContent = "New Colors";
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    displayMessage.textContent = "";
    rgbDisplay.textContent = pickedColor;
})



for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(pickedColor === clickedColor){
            displayMessage.textContent = "Correct!";
            changeColors(pickedColor);
            resetButton.textContent = "Play Again?";
            h1.style.backgroundColor = pickedColor;
        } else{
            this.style.backgroundColor = "#232323";
            displayMessage.textContent = "Try Again";
        }
    });
}

function changeColors(color){
    for (var i = 0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return random;
}

function generateRandomColors(num){
    var arr = [];
    for(var i = 0; i < num; i++){
        arr.push(generateColor());
    }

    return arr;
}

function generateColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    var str = "rgb(" + r + ", " + g + ", " + b + ")";
    return str;
}