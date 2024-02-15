const button = document.querySelector("#clickMe");
const paragraph = document.querySelector("#hovering");
const removeButton = document.querySelector("#remove");

// add a click event listener to the button
button.addEventListener("click", handleClick);

function handleClick() {
  paragraph.textContent = "This is a paragraph";
}


window.addEventListener("mousemove", handleMouseMove);

function handleMouseMove() {
  document.querySelector("#effect").innerHTML = Math.random();
}

// listens for the click event on the remove button
removeButton.addEventListener("click", removeMouseMove);

// run this code when the remove button is clicked
function removeMouseMove() {
  window.removeEventListener("mousemove", handleMouseMove);
}

console.log("I will run immediately");