import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import About from '../views/About.vue'
import NameCardList from '../views/NameCardList.vue'
import StudentList from '../views/StudentList.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/namecardlist',
    name: 'NameCardList',
    component: NameCardList
  },
  {
    path: '/studentlist',
    name: 'StudentList',
    component: StudentList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
