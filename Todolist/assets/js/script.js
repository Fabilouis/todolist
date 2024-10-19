let tasks = [
    { id: 1, description: "Tarea inicial 1", completed: false },
    { id: 2, description: "Tarea inicial 2", completed: false },
    { id: 3, description: "Tarea inicial 3", completed: false }
  ];
  const addTaskButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');
const totalTasks = document.getElementById('total-tasks');

// Función para actualizar la lista en el DOM
function renderTasks() {
  taskList.innerHTML = ''; // Limpiar lista
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${task.description} 
      <button onclick="deleteTask(${task.id})">Borrar</button>
      <input type="checkbox" ${task.completed ? 'checked' : ''} 
             onclick="toggleTask(${task.id})">
    `;
    taskList.appendChild(li);
  });
  totalTasks.textContent = tasks.length;
  updateCompletedTasks();
}

// Agregar tarea
addTaskButton.addEventListener('click', () => {
  const taskDescription = taskInput.value;
  if (taskDescription !== "") {
    const newTask = {
      id: tasks.length + 1,
      description: taskDescription,
      completed: false
    };
    tasks.push(newTask);
    taskInput.value = ''; // Limpiar el input
    renderTasks(); // Actualizar la lista
  }
});
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks(); // Actualizar la lista
  }
  function toggleTask(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
      task.completed = !task.completed;
      renderTasks(); // Actualizar la lista
    }
  }
  const completedTasks = document.getElementById('completed-tasks');

  function updateCompletedTasks() {
    const completedCount = tasks.filter(task => task.completed).length;
    completedTasks.textContent = completedCount;
  }
  document.addEventListener('DOMContentLoaded', renderTasks);
