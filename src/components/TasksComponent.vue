<template>
    <div class="tasks-container">
      <h1>Tugas</h1>
      <ul>
        <li v-for="task in tasks" :key="task.id">{{ task.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tasks: []
      };
    },
    async created() {
      try {
        const response = await fetch('https://your-vercel-api-url.vercel.app/api/tasks');
        if (!response.ok) {
          throw new Error('Failed to fetch tasks');
        }
        this.tasks = await response.json();
      } catch (error) {
        console.error(error);
      }
    }
  }
  </script>
  
  <style scoped>
  .tasks-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    margin-bottom: 20px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }
  </style>