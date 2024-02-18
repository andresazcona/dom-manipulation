const taskList = document.getElementById('taskList');
const newTaskInput = document.getElementById('newTaskInput');
const addTaskButton = document.getElementById('addTaskButton');

addTaskButton.addEventListener('click', () => {
    let newTask = newTaskInput.value;
    if (newTask === '') return; 

    const taskItem = document.createElement('li');
    taskItem.classList.add('flex', 'items-center', 'justify-between', 'py-3', 'border-b', 'border-gray-200'); 
    taskItem.innerHTML = `
        <label class="flex items-center">
            <input type="checkbox" class="mr-2 form-checkbox rounded-sm focus:ring-indigo-400"> 
            <span class="flex-1 line-through">${newTask}</span> 
        </label>
        <button class="bg-red-500 hover:bg-red-600 text-white font-medium py-1 px-3 rounded-md">
            Eliminar
        </button>
    `;
    taskList.appendChild(taskItem);
    newTaskInput.value = ''; 

    taskItem.querySelector('input[type="checkbox"]').addEventListener('change', toggleTaskComplete);
    taskItem.querySelector('button').addEventListener('click', deleteTask);
});

function toggleTaskComplete(event) {
    const taskItem = event.target.closest('li'); 
    taskItem.querySelector('span').classList.toggle('line-through');
}

function deleteTask(event) {
    const taskItem = event.target.closest('li');
    taskList.removeChild(taskItem);
}