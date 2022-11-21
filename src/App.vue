<template>
  <div id="app">
   
   
    

    <router-view/>
   <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/addemp">Add Employee Payroll</router-link>
    </nav>
    
   
   
  </div>
</template>

<script>
//import axios from 'axios'
//import HelloWorld from './components/HelloWorld.vue'
//import First_form from './components/First_form.vue'
//import Second_form from './components/Second_form.vue'

export default {
  name: 'App',
  components: {
   // HelloWorld,
    //First_form,
    //Second_form
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
