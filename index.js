let square = document.getElementById("square");
console.log(square.style.left, square.style.top);

function generateRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
square.addEventListener("click", () => {
  square.style.backgroundColor = generateRandomColor()
})

document.addEventListener("keydown", function(e) {
  console.log(e.key)
  if(e.key === "ArrowLeft" && square.style.left !== "0px"){
    var pixel = parseInt(square.style.left)
    pixel -= 10
    square.style.left = pixel + "px"
  }
if(e.key === "ArrowRight" && square.style.left !== "300px"){
  var pixel = parseInt(square.style.left)
  pixel += 10
  square.style.left = pixel + "px"
  }
if(e.key === "ArrowDown" && square.style.top !== "300px"){
  var pixel = parseInt(square.style.top)
  pixel += 10
  square.style.top = pixel + "px"
  }
if(e.key === "ArrowUp" && square.style.top !== "0px"){
  var pixel = parseInt(square.style.top)
  pixel -= 10
  square.style.top = pixel + "px"
  }
});

const button = document.createElement("button")
document.querySelector("body").append(button)
button.innerText = "do something"

button.addEventListener("click", () =>{
 window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ") })
