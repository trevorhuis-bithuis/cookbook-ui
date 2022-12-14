import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Search from '../views/Search.vue';
import NewRecipe from '../views/NewRecipe.vue';

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/new-recipe',
    name: 'New Recipe',
    component: NewRecipe
  }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;