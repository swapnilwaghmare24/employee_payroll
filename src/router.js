import Vue from 'vue'
import VueRouter from 'vue-router'
import First_form from './components/First_form.vue'
import Second_form from './components/Second_form.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'home',
    component: First_form
  },
  {
    path: '/addemp',
    name: 'AddEmpPayroll',
    
    component: Second_form
  }
]

const router = new VueRouter({
  routes
})

export default router