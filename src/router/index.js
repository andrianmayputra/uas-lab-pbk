import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Task1 from '../components/Task1.vue'
import Task2 from '../components/Task2.vue'
import Task3 from '../components/Task3.vue'
import Task4 from '../components/Task4.vue'
import Task5 from '../components/Task5.vue'
import Task6 from '../components/Task6.vue'

import WeatherComponent from '../components/WeatherComponent.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/task1',
    name: 'Task1',
    component: Task1
  },
  {
    path: '/task2',
    name: 'Task2',
    component: Task2
  },
  {
    path: '/task3',
    name: 'Task3',
    component: Task3
  },
  {
    path: '/task4',
    name: 'Task4',
    component: Task4
  },
  {
    path: '/task5',
    name: 'Task5',
    component: Task5
  },
  {
    path: '/task6',
    name: 'Task6',
    component: Task6
  },
  {
    path: '/weather',
    name: 'WeatherComponent',
    component: WeatherComponent
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router