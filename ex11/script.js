// (i) Create a dynamic table with three rows and three columns
const table = document.createElement("table");
table.border = "1";
for (let i = 0; i < 3; i++) {
    let row = table.insertRow();
    for (let j = 0; j < 3; j++) {
        let cell = row.insertCell();
        cell.innerText = `Row ${i + 1}, Col ${j + 1}`;
    }
}
document.body.appendChild(table);

// (ii) Change the color of the Button from red to green color on Mouse Over
const button = document.createElement("button");
button.innerText = "Hover me";
button.style.backgroundColor = "red";
button.onmouseover = () => button.style.backgroundColor = "green";
button.onmouseout = () => button.style.backgroundColor = "red";
document.body.appendChild(button);

// (iii) Change the color of the Textbox from green to yellow color on Focus and display a greeting message on Change
const textbox = document.createElement("input");
textbox.type = "text";
textbox.style.backgroundColor = "green";
textbox.onfocus = () => textbox.style.backgroundColor = "yellow";
textbox.onchange = () => alert("Hello, you changed the text!");
document.body.appendChild(textbox);

// (iv) Create an input field and a button to add input text as an <li> item on double click
const inputField = document.createElement("input");
const addButton = document.createElement("button");
addButton.innerText = "Add Item";
const ul = document.createElement("ul");
addButton.ondblclick = () => {
    if (inputField.value.trim() !== "") {
        let li = document.createElement("li");
        li.innerText = inputField.value;
        ul.appendChild(li);
        inputField.value = "";
    }
};
document.body.appendChild(inputField);
document.body.appendChild(addButton);
document.body.appendChild(ul);

// (v) Create two input fields: one for input and another for counting keypresses
const keyInput = document.createElement("input");
const keyCount = document.createElement("input");
keyCount.readOnly = true;
let count = 0;
keyInput.onkeydown = () => {
    count++;
    keyCount.value = count;
};
document.body.appendChild(keyInput);
document.body.appendChild(keyCount);
