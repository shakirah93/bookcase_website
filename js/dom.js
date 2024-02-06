console.log(document.body.parentNode);
console.log(document.body.parentElement);
const children = document.body.childNodes;

for (let i = 0; i < children.length; i++) {
  console.log(children[i]);
}
