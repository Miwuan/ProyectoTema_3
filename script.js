// Selectores
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todoFilter = document.querySelector('.todo-filter');

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', operaciones);
todoFilter.addEventListener('click', filtrar);

function addTodo(event) {
    event.preventDefault();

    if (todoInput.value == '') {
        alert("Por favor ingresa una tarea");
    } else {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo')

        const newTodo = document.createElement('li');
        newTodo.classList.add('todo-item');
        newTodo.innerText = todoInput.value;
        todoDiv.appendChild(newTodo);

        const completedButton = document.createElement('button');
        completedButton.classList.add('complete-btn');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        todoDiv.appendChild(completedButton);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        todoDiv.appendChild(deleteButton);

        todoList.appendChild(todoDiv);
        todoInput.value = '';
    }
}

function operaciones(e) {
    const item = e.target;

    if (item.classList[0] === 'delete-btn') {
        const todo = item.parentElement;
        todo.classList.add("caida")
        todo.addEventListener('transitionend', () => {
            todo.remove();
        })
    }

    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filtrar(e) {
    const todos = todoList.childNodes;
    todos.forEach(todo => {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex"
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none"
                }
                break;
        }
    })
}