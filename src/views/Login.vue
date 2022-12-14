<template>
  <section id="home">
    <div id="home-left">
      <Sidebar></Sidebar>
    </div>
    <div id="home-right">
      <LoginForm></LoginForm>
    </div>
  </section>
</template>

<script setup>
import Sidebar from "../components/Sidebar.vue";
import LoginForm from "../components/LoginForm.vue";
</script>

<style scoped>
#home {
  display: flex;
  flex-direction: row;
}

#home-left {
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
}

#home-right {
  width: 75%;
  height: auto;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
</style>
