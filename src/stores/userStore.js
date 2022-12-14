import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  state: () => {
    return {
      user: {},
    };
  },
  actions: {
    login: function ({ email, password }) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      };
      fetch("http://localhost:3400/login", requestOptions)
        .then((response) => response.json())
        .then((resjson) => {
          this.user.isLogged = true;
          this.user.accessToken = resjson.accessToken;
          this.user.pseudo = resjson.user.pseudo;
          this.user.email = resjson.user.email;
          this.user.urlImgProfil = resjson.user.urlImgProfil;
        });
    },

    logout: function () {
      this.user = {};
    },
  },
});
