<template>
  <div id="form">
    <div id="form-title">
      <h2 id="h2-title">Sign Up</h2>
    </div>
    <form id="form-main" @submit.prevent="submit">
      <input
        id="form-input"
        type="email"
        v-model="form.email"
        placeholder="your@email.com"
      />
      <input
        id="form-input"
        type="password"
        v-model="form.password"
        placeholder="password"
      />
      <input id="form-submit" type="submit" />
    </form>
  </div>
</template>

<script>
import { useUserStore } from "@/stores/userStore";

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      userStore: useUserStore(),
    };
  },
  methods: {
    submit() {
      const params = {
        email: this.form.email,
        password: this.form.password,
      };
      this.userStore.login(params);
      this.$router.replace({ name: "Home" });
    },
  },
};
</script>

<style scoped>
#form {
  width: 70%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
}

#form-title {
  display: flex;
  align-items: center;
}

#form-main {
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}

#form-input {
  width: 97%;
  height: 35px;
  margin-bottom: 30px;
  border: 1px solid black;
}

#form-submit {
  width: 20%;
  height: 35px;
  border: 1px solid black;
  font-size: 15px;
  font-weight: 600;
  background-color: green;
  color: white;
  cursor: pointer;
  margin-bottom: 20px;
}
</style>
