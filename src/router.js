import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import MealsByName from './views/MealsByName.vue'
import MealsByLetter from './views/MealsByLetter.vue'
import MealsByIngredients from './views/MealsByIngredients.vue'
import MealDetails from './views/MealDetails.vue'
import Ingridients from './views/Ingridients.vue'

const routes = [
  { path: '/meal-search/', name: 'Home', component: HomePage },
  { path: '/meal-search/by-name/:name?', name: 'MealsByName', component: MealsByName },
  { path: '/meal-search/by-letter/:letter?', name: 'MealsByLetter', component: MealsByLetter },
  { path: '/meal-search/byingridient/:ingridients?', name: 'MealsByIngridients', component: MealsByIngredients },
  { path: '/meal-search/:id', name: 'MealDetails', component: MealDetails },
  { path: '/meal-search/ingridients', name: 'Ingridients', component: Ingridients },
  { path: '/other', name: 'Other', component: () => import('@/views/OtherPage.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
