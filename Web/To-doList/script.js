function addTask() {
    const taskInput = document.getElementById('task');
    const taskList = document.getElementById('taskList');

    if (taskInput.value !== '') {
        const taskText = taskInput.value;
        const listItem = document.createElement('li');
        listItem.innerHTML = taskText;
        taskList.appendChild(listItem);
        taskInput.value = '';

        listItem.addEventListener('click', function () {
            listItem.remove();
        });
    }
}
