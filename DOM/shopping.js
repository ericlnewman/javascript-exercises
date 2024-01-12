// Create three variables that hold references to the list (<ul>), <input>, and <button> elements.
const list = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector("button");
// Create a function that will run in response to the button being clicked.
btn.addEventListener("click", ()=>{
    // Inside the function body, start off by storing the current value of the input element in a variable.
    const element = input.value;
    // Next, empty the input element by setting its value to an empty string — ''
    input.value = '';
    // Create three new elements — a list item (<li>), <span>, and <button>, and store them in variables.
    const listItem = document.createElement("li");
    const spanItem = document.createElement("span");
    const deleteBtn = document.createElement("button");
    // Append the span and the button as children of the list item.
    listItem.appendChild(spanItem);
    listItem.appendChild(deleteBtn);
    // Set the text content of the span to the input element value you saved earlier, and the text content of the button to 'Delete'.
    spanItem.textContent = element;
    deleteBtn.textContent = "Delete";
    // Append the list item as a child of the list.
    list.appendChild(listItem);
    // Attach an event handler to the delete button so that, when clicked, it will delete the entire list item (<li>...</li>).
    deleteBtn.addEventListener("click", () =>{
        list.removeChild(listItem);
    });
    // Finally, use the focus() method to focus the input element ready for entering the next shopping list item.
    input.focus();
});

