<template>
    <nav>
      <router-link to="/">Beranda</router-link>
      <router-link to="/task1">Tugas 1</router-link>
      <router-link to="/task2">Tugas 2</router-link>
      <router-link to="/task3">Tugas 3</router-link>
      <router-link to="/task4">Tugas 4</router-link>
      <router-link to="/task5">Tugas 5</router-link>
      <router-link to="/task6">Tugas 6</router-link>
      <router-link to="/weather">Cuaca</router-link>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navigation'
  }
  </script>
  
  <style scoped>
  nav {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  nav a {
    margin: 0 10px;
    padding: 10px;
    text-decoration: none;
    color: #007BFF;
    border: 1px solid transparent;
    border-radius: 5px;
  }
  
  nav a.router-link-exact-active {
    font-weight: bold;
    border: 1px solid #007BFF;
  }
  </style>