// Save data between refresh

const todos = [];

// 1. render todos
const list = document.getElementById("todo-list");

for (let i = 0; i < todos.length; i++) {
    renderTodo(todos[i], "item-" + (i + 1));
}

function renderTodo(text, id) {
    const li = document.createElement("li");
    const input = document.createElement("input");
    const label = document.createElement("label");
    const span = document.createElement("span");

    list.appendChild(li);
    li.appendChild(input);
    li.appendChild(label);
    label.appendChild(span);

    input.setAttribute("id", id);
    input.setAttribute("type", "checkbox");
    label.setAttribute("for", id);
    span.textContent = text;
}

// 2. toggle todo
// ??

// 3. add new todo
const addNewItemForm = document.querySelector("form");

addNewItemForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // @ts-ignore
    const newItemText = e.currentTarget.itemText.value;
    todos.push(newItemText);
    
    renderTodo(newItemText, "item-" + todos.length)

    // Clear the form
});
