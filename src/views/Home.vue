<template>
  <section id="home">
    <div id="home-left">
      <Sidebar></Sidebar>
    </div>
    <div id="home-right">
      <Suspense>
        <NetworkLine></NetworkLine>
      </Suspense>
    </div>
  </section>
</template>

<script setup>
import Sidebar from "../components/Sidebar.vue";
import NetworkLine from "../components/Feed.vue";
</script>

<style scoped>
#home {
  display: flex;
  flex-direction: row;
}

#home-left {
  width: 25%;
  height: auto;
  display: flex;
  justify-content: center;
}

#home-right {
  width: 75%;
  height: auto;
  display: flex;
  justify-content: center;
}
</style>
