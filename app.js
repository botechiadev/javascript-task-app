// Task Class - representa cada Task
class Task{
    constructor(id, title, description){
        this.id = new Date().toISOString();
        this.title = inputTitle;
        this.description = inputDescription;
    }
}

// UI Class - representa edicao de Tasks
class UI {
    
    static displayTasks(){
        const today = new Date().toISOString()
        const StoredTasks= [
            {
            id: today,
            title: "Task1",
            description: "Descricao da task",
        }
    ]


    const tasks = StoredTasks;

    // aqui como mostrar as tasks

    tasks.forEach((task) => UI.addTaskToList(task));
    }

    static addTaskToList(task){
        const listHTML = document.getElementById('task-list');

        // cria elemento sem js
        const tableRow = document.createElement('tr')

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
                <a href="#" class="btn btn-danger">
                <i class="fa-solid fa-trash"></i>
                </a>
                <button class="btn btn-primary">
                <i class="fa-solid fa-pencil"></i>
                </button>
            </td>
        `

        listHTML.appendChild(tableRow);
    }

}


// Storage Class - representa o armazenamento de cada Task por Handle Storage


// Events

// DisplayTask permite mostrar tasks armazenados 
document.addEventListener('DOMContentLoaded', UI.displayTasks );


// AddBook : permite adicionar task ao clicar em botao em adicionar

// RemoveTask permite remover uma task de local storage