// Create a <p> with red text that says "Hey I’m red!" and add it to the document’s body
const firstPar = document.createElement("p");
firstPar.style.color = "red";
firstPar.textContent = "Hey I’m red!";
document.body.appendChild(firstPar);

// Create and add an <h3> with blue text that says "I’m a blue h3!"
const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "I’m a blue h3!";
document.body.appendChild(h3);

// Create and add a <div> with a black border and pink background color with the following elements inside of it:
const div = document.createElement("div");
div.style.border = "3px solid black";
div.style.backgroundColor = "pink";

//     another <h1> that says "I’m in a div"
const h1 = document.createElement("h1");
h1.textContent = "I’m in a div";
//     a <p> that says "ME TOO!"
const secondPar = document.createElement("p");
secondPar.textContent = "ME TOO!";

div.appendChild(h1);
div.appendChild(secondPar);
document.body.appendChild(div);
