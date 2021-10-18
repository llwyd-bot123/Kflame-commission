import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import GenderPage from '../views/genderPage.vue'
import QuizPage from '../views/quizPage.vue'
import ResultPage from '../views/resultPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/genderPage',
    name: 'genderPage',
    component: GenderPage
  },
  {
    path: '/quizPage',
    name: 'quizPage',
    component: QuizPage
  },
  {
    path: '/resultPage',
    name: 'resultPage',
    component: ResultPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
