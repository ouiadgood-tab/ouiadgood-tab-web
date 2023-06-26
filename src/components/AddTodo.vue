<template>
    <div class="todo-container todo-app">
      <h1>{{ translatedTodoContainer.title }}</h1>
    
      <div class="todo-input">
        <input type="text" v-model="newTodoText" :placeholder="translatedTodoContainer.placeholder" />
        <button @click="addTodo">{{ translatedTodoContainer.addButton }}</button>
      </div>
    
      <ul class="todo-list ">
        <li v-for="(todo, index) in todos" :key="index" class="todo-item">
          <span class="todo-text">{{ todo.text }}</span>
          <span class="timestamp">{{ formatDate(todo.createdAt) }}</span>
          <button class="delete-btn" @click="deleteTodo(index)">{{ translatedTodoContainer.deleteButton }}</button>
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
        locale: localStorage.getItem('locale') || 'en', // Default locale is English
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
    computed: {
    translatedTodoContainer() {
      let translations;
      if (this.locale === 'en') {
        translations = {
          title: 'To Do List',
          placeholder: "Enter a to do",
          addButton: "Add",
          deleteButton: "Delete",
        };
      } else if (this.locale === 'fr') {
        translations = {
          title: "Liste de tâches",
          placeholder: "Entrez une tâche",
          addButton: "Ajouter",
          deleteButton: "Supprimer"
        };
      } else {
        translations = {
          title: '',
          placeholder: '',
        };
      }
      return translations;
    },
  },
  };
  </script>
  
  <style scoped>
@media screen and (max-width:500px){
  .todo-container {
    width: 80vw !important;
  }
}
.todo-container {
  max-height: 400px; /* Adjust the maximum height as needed */
  overflow-y: auto;
  position: relative;
    width: 50vw;
    margin: 0 auto;
    padding: 1rem;
    background-color: #13afc02f;
    backdrop-filter: blur(10px);
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    
}

h1 {
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #fff;
}

.todo-input {
  display: flex;
  gap:10px;
  margin-bottom: 1rem;
}

.todo-input input {
  /* flex-grow: 1; */
  width: 100%;
  padding: 0.5rem;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 3px;
  
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
  color: #333;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 0.5rem;
  
}

.timestamp {
  font-size: 0.8rem;
  margin-left: 5px;
  color:#000
}

.todo-text{
  color: #000;
  font-weight: bold;
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
  