//Get the input and the task list
const inputTask = document.getElementById('input-task');
const taskList = document.getElementById('task-list');
const todoForm = document.getElementById('todo-form');
const clearBtn = document.getElementById('clear-btn')

//Check local storage for saved tasks
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

//Load saved tasks on page load
loadTasks();

/*Add a new task
function addTask(taskText) {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `<span>$ {taskText} </span>
    <button class="delete-btn">Delete</button>`;
    taskList.appendChild(taskItem);
    tasks.push(taskText);
    saveTasks()
}
*/

/*Delete a task
function deleteTask(taskItem) {
    const taskText =taskItem.querySelector('span').innerText;
    taskItem.remove();
    tasks = tasks.filter(task => task !== taskText);
    saveTasks();
}
*/
//Load tasks from local storage
function loadTasks() {
    tasks.forEach(task => {
        addTask(task);
    });
}

//Save tasks to local storage
function saveTasks() {
    localStorage.setItem('tasks', JSON,stringify(tasks));
}

//Mark tasks as done
taskList.addEventListener('click', (events) => {
    if (events.target.tagName === 'SPAN') {
         events.target.classList.toggle('done');

    } else if(
        events.target.classList.contains('delete-btn')) {
            deleteTask(events.target.parentNode);
        }
});

//Handle form submit
FormData.addEventListener('submit', (events) => {
    events.preventDefault();
    if (inputTask.value === '') {
        alerrt('Please enter a task!');
        return;
        }
        addTask(inputTask.value);
        inputTask.value = '';
});

//Clear all tasks
clearBtn.addEventListener('click', () => {
    taskList.innerHTML = '';
    tasks = [];
    saveTasks();
} );

//Clear all tasks