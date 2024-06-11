const pendingTasksList = document.getElementById('pendingTasks');
const completedTasksList = document.getElementById('completedTasks');
const taskInput = document.getElementById('taskInput');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    const currentDate = new Date();
    const dateString = formatDate(currentDate);
    const timeString = formatTime(currentDate);
    li.textContent = `${taskText} (${dateString} ${timeString})`;

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.onclick = completeTask;
    li.appendChild(completeButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = deleteTask;
    li.appendChild(deleteButton);

    pendingTasksList.appendChild(li);
    taskInput.value = '';
}

function completeTask(event) {
    const taskItem = event.target.parentElement;
    const taskText = taskItem.textContent;
    taskItem.remove();

    const completedTask = document.createElement('li');
    const currentDate = new Date();
    const dateString = formatDate(currentDate);
    const timeString = formatTime(currentDate);
    completedTask.textContent = `${taskText} (${dateString} ${timeString})`;
    completedTask.classList.add('completed');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = deleteTask;
    completedTask.appendChild(deleteButton);

    completedTasksList.appendChild(completedTask);
}

function deleteTask(event) {
    event.target.parentElement.remove();
}

function formatDate(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function formatTime(date) {
    const options = { hour: '2-digit', minute: '2-digit', hour12: true };
    return date.toLocaleTimeString('en-US', options);
}