const inputNewTask = document.querySelector('.input-new-task');
const btnAddTask = document.querySelector('.btn-add-task');
const listTasks = document.querySelector('.tasks');
const btnRemAllTasks = document.querySelector('.btn-remove-all-tasks')

const ulList = [];

btnAddTask.addEventListener('click', handleTaskEvent);
inputNewTask.addEventListener('keypress', handleTaskEvent);

btnRemAllTasks.addEventListener('click', removeAllTasks);

function handleTaskEvent(event) {
    if (event.type === 'click' || (event.type === 'keypress' && event.key === 'Enter')) {
        const task = inputNewTask.value.trim();

        if (task) {
            createNewTaskInList(task);
            inputNewTask.value = '';
            inputNewTask.focus();
        } else {
            alert('Por favor, insira uma tarefa válida')
        }
    }
}

function createNewTaskInList(task) {
    const taskElement = document.createElement('li');
    taskElement.innerHTML = `<span>${task}</span>`;
    
    const removeBtn = createRemoveBtn();
    taskElement.appendChild(removeBtn)

    removeBtn.addEventListener('click', () => {
        listTasks.removeChild(taskElement)
        saveTask();
    })
    
    listTasks.appendChild(taskElement);
    saveTask();
}

function createRemoveBtn() {
    const removeBtn = document.createElement('button')
    removeBtn.textContent = 'Remover';
    removeBtn.style.marginLeft = '10px';
    removeBtn.style.cursor = 'pointer'

    return removeBtn;
}

function saveTask() {
   const tasks = listTasks.querySelectorAll('li');
   const arrayTasks = [];

   for (let task of tasks) {
        let taskText = task.innerText
        taskText = taskText.replace('Remover', '').trim();
        arrayTasks.push(taskText);
   }

   const jsonTasks = JSON.stringify(arrayTasks);
   localStorage.setItem('tasks', jsonTasks);  // 'data base' do navegador
}

function loadTasks() {
    const tasks = localStorage.getItem('tasks');
    const taskList = JSON.parse(tasks);

    for (let task of taskList) {
        createNewTaskInList(task);
    }
}

loadTasks();

function removeAllTasks() {
    while (listTasks.firstChild) {
        listTasks.removeChild(listTasks.firstChild);
        saveTask()
    }
}

