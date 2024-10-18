let taskList = [];

// Function to add a task
function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        taskList.push({ text: taskText, isEditing: false });
        taskInput.value = '';
        renderTasks();
    }
}

// Function to render the task list
function renderTasks() {
    const taskListContainer = document.getElementById('task-list');
    taskListContainer.innerHTML = ''; // Clear previous tasks

    taskList.forEach((task, index) => {
        const listItem = document.createElement('li');
        
        if (task.isEditing) {
            const editInput = document.createElement('input');
            editInput.type = 'text';
            editInput.value = task.text;
            listItem.appendChild(editInput);

            const saveBtn = document.createElement('button');
            saveBtn.className = 'edit-btn';
            saveBtn.innerText = 'Save';
            saveBtn.onclick = () => saveEditTask(index, editInput.value);
            listItem.appendChild(saveBtn);

        } else {
            const taskText = document.createElement('span');
            taskText.innerText = task.text;
            listItem.appendChild(taskText);

            const editBtn = document.createElement('button');
            editBtn.className = 'edit-btn';
            editBtn.innerText = 'Edit';
            editBtn.onclick = () => editTask(index);
            listItem.appendChild(editBtn);
        }

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerText = 'Delete';
        deleteBtn.onclick = () => deleteTask(index);
        listItem.appendChild(deleteBtn);

        taskListContainer.appendChild(listItem);
    });
}

// Function to edit a task
function editTask(index) {
    taskList[index].isEditing = true;
    renderTasks();
}

// Function to save the edited task
function saveEditTask(index, newText) {
    taskList[index].text = newText;
    taskList[index].isEditing = false;
    renderTasks();
}

// Function to delete a task
function deleteTask(index) {
    taskList.splice(index, 1); // Remove task from array
    renderTasks();
}