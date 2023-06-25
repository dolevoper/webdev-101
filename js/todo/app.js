const todos = JSON.parse(localStorage.getItem("todos")) ?? [];

// Save data between refresh
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

// 1. render todos
const list = document.getElementById("todo-list");

for (let i = 0; i < todos.length; i++) {
    renderTodo(todos[i], "item-" + (i + 1), i);
}

function renderTodo(todo, id, index) {
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

    if (todo.checked) {
        input.setAttribute("checked", "");
    }

    input.setAttribute("data-index", index);
    input.addEventListener("change", toggleTodo);
    
    label.setAttribute("for", id);
    span.textContent = todo.text;
}

// 2. toggle todo
function toggleTodo(e) {
    const todoIndex = parseInt(e.target.getAttribute("data-index"));
    const checked = e.target.checked;

    todos[todoIndex].checked = checked;

    saveTodos();
}

// 3. add new todo
const addNewItemForm = document.querySelector("form");

addNewItemForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // @ts-ignore
    const newItemText = e.currentTarget.itemText.value;
    const todo = { text: newItemText, checked: false };
    todos.push(todo);
    
    renderTodo(todo, "item-" + todos.length)

    // @ts-ignore
    e.currentTarget.itemText.value = "";
    // @ts-ignore
    e.currentTarget.itemText.setAttribute("value", "");

    saveTodos();
});
