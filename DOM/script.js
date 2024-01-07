const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

// add a <p< with red text
const redContent = document.createElement("p");
redContent.classList.add("redContent");
redContent.textContent = "Hey I'm red!";
redContent.style.cssText = "color: red;";
container.appendChild(redContent);
// add a <h3> with blue text
const blueContent = document.createElement("h3");
blueContent.classList.add("blueContent");
blueContent.textContent = "I'm a blue h3";
blueContent.style.cssText = "color: blue;";
container.appendChild(blueContent);
// add a div with black border and pink background color that contains another h1 and a p.
const blackAndPinkContent = document.createElement("div");
const blackAndPinkContentP = document.createElement("p");
const blackAndPinkContenth1 = document.createElement("h1");
blackAndPinkContent.classList.add("blackAndPinkContent");
blackAndPinkContentP.classList.add("blackAndPinkContent");
blackAndPinkContent.classList.add("blackAndPinkContent");
blackAndPinkContentP.textContent = "ME TOO!";
blackAndPinkContenth1.textContent = "I'm in a div";
blackAndPinkContent.setAttribute("style", "border-color: black; background-color: pink;");
blackAndPinkContent.appendChild(blackAndPinkContenth1);
blackAndPinkContent.appendChild(blackAndPinkContentP);
container.appendChild(blackAndPinkContent);