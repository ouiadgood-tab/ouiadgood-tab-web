<template>
    <div class="todo-app">
      <h1>Todo List</h1>
  
      <div class="todo-input">
        <input type="text" v-model="newTodoText" placeholder="Enter a todo" />
        <button @click="addTodo">Add</button>
      </div>
  
      <ul class="todo-list">
        <li v-for="(todo, index) in todos" :key="index">
          <span>{{ todo.text }}</span>
          <span class="timestamp">{{ formatDate(todo.createdAt) }}</span>
          <button @click="deleteTodo(index)">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name:'AddTodo',
    data() {
      return {
        newTodoText: '',
        todos: [],
      };
    },
    mounted() {
      const storedTodos = localStorage.getItem('todos');
      if (storedTodos) {
        this.todos = JSON.parse(storedTodos);
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
  
        this.todos.push(newTodo);
        this.newTodoText = '';
  
        localStorage.setItem('todos', JSON.stringify(this.todos));
      },
      deleteTodo(index) {
        this.todos.splice(index, 1);
        localStorage.setItem('todos', JSON.stringify(this.todos));
      },
      formatDate(date) {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
      },
    },
  };
  </script>
  
  <style scoped>
  .todo-app {
    max-width: 400px;
    margin: 0 auto;
    background-color: black;
  }
  
  .todo-input {
    display: flex;
    margin-bottom: 1rem;
  }
  
  .todo-input input {
    flex-grow: 1;
    margin-right: 0.5rem;
  }
  
  .todo-list {
    list-style-type: none;
    padding: 0;
  }
  
  .todo-list li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  
  .timestamp {
    font-size: 0.8rem;
    margin-left: 5px;
  }
  </style>
  