// script.js
document.addEventListener('DOMContentLoaded', () => {
    fetchTodos();
  });
  
  function fetchTodos() {
    fetch('/todos')
      .then(response => response.json())
      .then(todos => {
        const todoList = document.getElementById('todoList');
        todoList.innerHTML = '';
        todos.forEach(todo => {
          const listItem = document.createElement('li');
          listItem.textContent = todo.task;
          todoList.appendChild(listItem);
        });
      });
  }
  
  function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();
    if (task !== '') {
      fetch('/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ task })
      })
      .then(response => {
        if (response.ok) {
          taskInput.value = '';
          fetchTodos();
        } else {
          alert('Failed to add task');
        }
      });
    }
  }
  