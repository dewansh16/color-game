var numSquares = 6;
var colors = generateRandomColors(numSquares);
var square =document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var h1 =document.querySelector("h1");
var body =document.querySelector("body");
var resetButton =document.getElementById("resetButton");
var Easybtn = document.getElementById("Easybtn");
var Hardbtn = document.getElementById("Hardbtn");
var pickedColor = pickColor();

var message =document.querySelector("#message");

colorDisplay.textContent = pickedColor;

Easybtn.addEventListener("click",function(){
  Easybtn.classList.add("selected");
  Hardbtn.classList.remove("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0 ; i<square.length ; i++)
  {
    if(colors[i])
    {
      square[i].style.backgroundColor = colors[i];
    }
    else{
      square[i].style.display = "none";
    }
  }
})

Hardbtn.addEventListener("click",function(){
  Hardbtn.classList.add("selected");
  Easybtn.classList.remove("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0 ; i<square.length ; i++)
  {
      square[i].style.backgroundColor = colors[i];
      square[i].style.display = "block";
  }
})

resetButton.addEventListener("click",function(){
  message.textContent="";
  h1.style.backgroundColor = "steelblue";
  resetButton.textContent = "New Colors";
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i=0 ; i<square.length ; i++)
   {
       square[i].style.backgroundColor = colors[i];
   };
});




for(var i=0 ; i<square.length ; i++)
{
   square[i].style.backgroundColor = colors[i];

 square[i].addEventListener("click",function()
   {
      var clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor)
      {
          message.textContent="Correct!";
          changeColor(clickedColor);
          h1.style.backgroundColor = clickedColor;
          resetButton.textContent = "Play Again?";
      }
      else
      {
        this.style.backgroundColor="#232323";
        message.textContent="Try Again";
      }
        
   });
};

function changeColor(color)
{
    for(var i=0;i<square.length;i++)
    {
        square[i].style.backgroundColor = color;
    }
};

function pickColor()
{
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
};

function generateRandomColors(num){
    var arr = [];
    for(var i=0;i < num;i++)
    {
      arr.push(randomColor());
    }
    return arr;
};

function randomColor()
{
   var r = Math.floor(Math.random()*256);
   var g = Math.floor(Math.random()*256);
   var b = Math.floor(Math.random()*256);
   return "rgb(" + r + ", "+g + ", "+ b + ")";
};