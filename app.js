// Task Class - representa cada Task
class Task {
    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
    }
}

// UI Class - representa manipulação de Tasks
class UI {
    static displayTasks() {
        const storedTasks = Storage.getTasks();
        storedTasks.forEach((task) => UI.addTaskToList(task));
    }

    static addTaskToList(task) {
        const listHTML = document.getElementById('task-list');
        const tableRow = document.createElement('tr');

        tableRow.innerHTML = `
            <td>
                ${task.id}
            </td>
            <td>
                ${task.title}
            </td>
            <td>
                ${task.description}
            </td>
            <td>
                <a href="#" class="btn btn-primary delete" >
                <i class="fa-solid fa-trash"></i>
                </a>
            </td>
        `;

        listHTML.appendChild(tableRow);
    }

    static deleteTask(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    static showAlerts(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;

        div.appendChild(document.createTextNode(message));

        document.body.insertBefore(div, document.body.firstChild);

        setTimeout(() => {
            div.remove();
        }, 3000);
    }

    static clearFields() {
        document.getElementById('inputTitle').value = "";
        document.getElementById('inputDescription').value = "";
    }
}

class Storage {
    static getTasks() {
        let tasks;
        if (localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }

        return tasks;
    }

    static addTask(newTask) {
        const tasks = Storage.getTasks();
        tasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    static removeTask(id) {
        const tasks = Storage.getTasks();
        tasks.forEach((task, index) => {
            if (task.id === id) {
                tasks.splice(index, 1);
            }
        });

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}

// Events

document.getElementById('task-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const id = Date.now().toString();
    const title = document.getElementById('inputTitle').value;
    const description = document.getElementById('inputDescription').value;

    if (title === "" || description === "") {
        UI.showAlerts('Todos os campos do formulário são requeridos', "primary");
    } else {
        UI.showAlerts('Task Adicionada com sucesso', "success");

        const newTask = new Task(id, title, description);
        UI.addTaskToList(newTask);

        Storage.addTask(newTask);
        UI.clearFields();
    }
});

document.getElementById('task-list').addEventListener('click', (e) => {
    UI.deleteTask(e.target);

    const taskId = e.target.parentElement.parentElement.querySelector('td:first-child').textContent;
    Storage.removeTask(taskId);
});

// Display tasks after the DOM content is loaded
document.addEventListener('DOMContentLoaded', UI.displayTasks);
