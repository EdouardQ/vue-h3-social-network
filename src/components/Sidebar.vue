<template>
  <div v-if="!userStore.user.isLogged" id="nav">
    <div id="nav-item" class="nav-separation">
      <router-link to="/"><h3>Home</h3></router-link>
    </div>
    <div id="nav-item">
      <router-link to="/login"><h3>Login</h3></router-link>
    </div>
  </div>
  <div v-else id="nav">
    <div id="nav-item" class="nav-separation">
      <router-link to="/"><h3>Home</h3></router-link>
    </div>
    <div id="nav-item" v-on:click="this.userStore.logout">
      <h3>Logout</h3>
    </div>
  </div>
</template>

<script>
import { useUserStore } from "@/stores/userStore";

export default {
  data() {
    return {
      userStore: useUserStore(),
    };
  },
};
</script>

<style scoped>
#nav {
  width: 15%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  position: absolute;
  border: 2px solid black;
}

#nav-item {
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
a {
  text-decoration: none;
    color: black;
}

.nav-separation {
  border-bottom: 1px solid black;
}
</style>
