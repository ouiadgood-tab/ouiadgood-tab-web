<template>
    <div class="todo-container">
      <h1>Todo List</h1>
    
      <div class="todo-input">
        <input type="text" v-model="newTodoText" placeholder="Enter a todo" />
        <button @click="addTodo">Add</button>
      </div>
    
      <ul class="todo-list show-scrollbar">
        <li v-for="(todo, index) in todos" :key="index" class="todo-item">
          <span class="todo-text">{{ todo.text }}</span>
          <span class="timestamp">{{ formatDate(todo.createdAt) }}</span>
          <button class="delete-btn" @click="deleteTodo(index)">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AddTodo',
    data() {
      return {
        newTodoText: '',
        todos: [],
      };
    },
    created() {
      const storedTodo = localStorage.getItem('todoList');
      if (storedTodo) {
        this.todos = JSON.parse(storedTodo);
      }
    },
    methods: {
      addTodo() {
        if (this.newTodoText.trim() === '') {
          return;
        }
  
        const newTodo = {
          text: this.newTodoText,
          createdAt: new Date(),
        };
  
        this.todos.unshift(newTodo);
        localStorage.setItem('todoList', JSON.stringify(this.todos));
  
        this.newTodoText = '';
      },
      deleteTodo(index) {
        this.todos.splice(index, 1);
        localStorage.setItem('todoList', JSON.stringify(this.todos));
      },
      formatDate(date) {
        const options = { 
          year: 'numeric', 
          month: 'short', 
          day: 'numeric', 
          hour: 'numeric', 
          minute: 'numeric'
        };
        return new Date(date).toLocaleDateString('en-US', options);
      },
    },
  };
  </script>
  
  <style scoped>
.todo-app {
    position: relative;
    max-width: 450px;
    margin: 0 auto;
    padding: 1rem;
    background-color: #13afc02f;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.todo-container {
  max-height: 400px; /* Adjust the maximum height as needed */
  overflow-y: auto;
  position: relative;
    max-width: 450px;
    margin: 0 auto;
    padding: 1rem;
    background-color: #13afc02f;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    scrollbar-track-color: #000000;
}

h1 {
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #fff;
}

.todo-input {
  display: flex;
  margin-bottom: 1rem;
}

.todo-input input {
  flex-grow: 1;
  padding: 0.5rem;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-right: 0.5rem;
}

.todo-input button {
  padding: 0.5rem 1rem;
  font-size: 16px;
  background-color: #13b0c0;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.todo-input button:hover {
  background-color: #088694;
}

.todo-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 0.5rem;
  
}
.todo-container::-webkit-scrollbar {
  width: 8px;
}

.todo-container::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 15px;
}

.todo-container::-webkit-scrollbar-thumb {
  background: #f2d80f88;
  border-radius: 5px;
}
.todo-container::-webkit-scrollbar-thumb:hover {
  background-color: #f2d70f;
}

.timestamp {
  font-size: 0.8rem;
  margin-left: 5px;
}

.delete-btn {
  padding: 0.25rem 0.5rem;
  font-size: 12px;
  background-color: #ff5252;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.delete-btn:hover {
  background-color: #ff1744;
}
  </style>
  