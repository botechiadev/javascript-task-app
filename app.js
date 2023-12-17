// Task Class - representa cada Task
class Task{
    constructor(id, title, description){
        this.id =id;
        this.title = title;
        this.description = description;
    }
}

// UI Class - representa edicao de Tasks
class UI {
    
    static displayTasks(){
        const today = Date.now().toString()

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

document.getElementById('task-form').addEventListener('submit', (e)=>{
    //preventDefault para evitar submit
    e.preventDefault()
    
    // passo 1 - pegar valores do form
    const id = Date.now().toString()
    const title = document.getElementById('inputTitle').value
    const description  = document.getElementById('inputDescription').value


    // instanciar class Task usanado constructor
    const newTask = new Task(id, title, description)

    console.log(newTask)

})


// RemoveTask permite remover uma task de local storage