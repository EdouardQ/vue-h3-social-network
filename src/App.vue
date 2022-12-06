<script setup>
import Sidebar from "./components/Sidebar.vue"
import {RouterView} from "vue-router"
</script>

<template>
  <Sidebar />
  <div class="container">
    <RouterView />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
