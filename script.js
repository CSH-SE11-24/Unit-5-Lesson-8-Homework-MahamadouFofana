console.log("Script running...")
// Task 1: Button One Flow
// Select the first button

let bu = document.getElementById("buttonOne")

// Select the first p tag under that button

let para = document.getElementById("textOne")

// Add an event listener to the button such that when it's clicked, the p tag text says "You guessed wrong"

bu.addEventListener("click", function(event){
  para.textContent = "You guessed wrong"
})

// Task 2: Button Two Flow
// In index.html, add the IDs to the second button and p tag
// Select the second button and p tags

let but = document.getElementById("buttonTwo")
let par = document.getElementById("textTwo")


// Add an event listener to the second button such that when it's clicked, the p tag text is "You guessed right!"

but.addEventListener("click", function(event){
  par.textContent = "You guessed right!"
})

// Task 3: Dog image flow
// Select the dog image

let im = document.getElementById("dog")

// Add an event listener to the dog image such that when the mouse is over it, the image src becomes post-boop.png
// Yellow: You can do this on click

im.addEventListener("mouseover", function(event){
  im.src = "post-boop.png"
})

// Add an event listener to the dog image such that when the mouse is off it, the image src becomes pre-boop.jpeg
// Yellow: You can skip this

im.addEventListener("mouseout", function(event){
  im.src = "pre-boop.png"
})

// Task 4: Secret code flow
// Select the input

let inp = document.getElementById("code")

// Add an event listener to the input such that when a key is pressed, you console log the value
// Extra credit: check if the value is "racoon." If it is, add the racoon.jpg image to the div below (you will need to select it first)

let di = document.getElementById("result")

inp.addEventListener("keydown", function(event){
  console.log(inp.value)
  if(inp.value === "racoon"){
    console.log("correct code")
   di.innerHTML = '<img src="raccoon.jpg">'
  }
})



