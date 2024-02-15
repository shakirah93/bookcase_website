console.log(document.body.parentNode);
console.log(document.body.parentElement);
const children = document.body.childNodes;
console.log("chidren of the body element: ", children);

function listDomElements() {
  for (let i = 0; i < children.length; i++) {
    console.log(children[i]);
  }
}

const heading = document.getElementsByTagName("h1");
console.log(heading);

const headingOne = document.getElementById("first-heading");
console.log(headingOne);
console.log(headingOne.innerHTML);

const redColorElements = document.getElementsByClassName("red-color");
console.log(redColorElements);

const paragraph = document.getElementById("paragraph");
// innerHTML prints out the content with the HTML tags inside
console.log(paragraph.innerHTML);

// textContent will only output the content, disregarding the HTML tags
console.log(paragraph.textContent);

const paragraph2 = document.querySelector("#paragraph");

// this will pick the first element with the class "red-color"
const redColorElements2 = document.querySelector(".red-color");
console.log(redColorElements2);

const heading1 = document.querySelector("h1");
console.log(heading1);

// this will return all the h1s
const headings = document.querySelectorAll("h1");
console.log(headings);

const firstParagraph = document.querySelector(".about");
console.log(firstParagraph.innerHTML);

const allParagraphs = document.querySelectorAll(".about");
console.log(allParagraphs);

// create new h3 element
const headingThree = document.createElement("h3");

// create a text node
const textNode = document.createTextNode("This is a heading three tag");

// attach the text node to the heading tag
headingThree.appendChild(textNode);

// attach the h3 element to the body element
document.body.appendChild(headingThree);

// Task One
function createListOfFruits(array) {
  // creates the div element
  let listContainer = document.createElement("div");
  listContainer.id = "list-container";

  // create the unordered list
  const unorderedList = document.createElement("ul");
  /* this loops through the array and create a new "li" element 
   with the array item, then append to the ul element */
  /*for (let i = 0; i < array.length; i++) {
    if (array[i].length <= 5) {
      const listItem = document.createElement("li");
      const textNode = document.createTextNode(array[i]);

      listItem.appendChild(textNode);
      unorderedList.appendChild(listItem);
    }
  }*/

  array.filter(fruit => fruit.length <= 5) // ["apple"]
  .map(fruit => {
    const listItem = document.createElement("li");
    const textNode = document.createTextNode(fruit);

    listItem.appendChild(textNode);
    unorderedList.appendChild(listItem);
  })

  // attaching ul to the div
  listContainer.appendChild(unorderedList);

  // attach the div to the body element
  document.body.appendChild(listContainer);
}

createListOfFruits(["Banana", "Apple", "Orange", "Pineapple"]);

/*
  <div id="list-container"></div>
  <ul></ul>
  first iteration, i=0
  <li></li>
  textNode: Banana
  <li>Banana</li>
  <ul><li>Banana</li></ul>
- 2nd iteration
  <li></li>
  textNode: Apple
  <li>Apple</li>
  <ul>
    <li>Banana</li>
    <li>Apple</li>
  </ul>

- 3rd iteration
  <li></li>
  textNode: Orange
  <li>Orange</li>
  <ul>
    <li>Banana</li>
    <li>Apple</li>
    <li>Orange</li>
  </ul>

- 4th iteration
  <li></li>
  textNode: Pineapple
  <li>Pineapple</li>
  <ul>
    <li>Banana</li>
    <li>Apple</li>
    <li>Orange</li>
    <li>Pineapple</li>
  </ul>
  Iteration ended
  <div id="list-container">
    <ul>
      <li>Banana</li>
      <li>Apple</li>
      <li>Orange</li>
      <li>Pineapple</li>
    </ul>
  </div>

  <body>
    <div id="list-container">
      <ul>
        <li>Banana</li>
        <li>Apple</li>
        <li>Orange</li>
        <li>Pineapple</li>
      </ul>
    </div>
  </body>

*/

const headingSix = document.createElement("h6");

// add text to the newly created h6 element
// headingSix.textContent = "This is an heading six element";

// add html element inside the content of the newly created h6 element
headingSix.innerHTML = "This is an <em>heading six</em> element";

headingSix.style.color = "purple";
headingSix.style.fontSize = "20px";

document.body.appendChild(headingSix);
