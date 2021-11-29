import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Details from '../views/Details.vue'
import Create from '../views/Create.vue'
import RealTime from '../views/RealTime.vue'
import Tags from '../views/tag.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, 
  {
    // creating a new route
    path: '/path/:id',
    name:"Details", 
    component: Details, 
    props: true
  }, 
  {
    path:'/create', 
    name:'Create', 
    component: Create
  }, 
  {
    // creating a new route
    path: '/tags/:tag',
    name: 'Tags', 
    component: Tags, 
    props: true
  },
  {
    path: '/realtime',
    name: 'RealTime', 
    component: RealTime
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
