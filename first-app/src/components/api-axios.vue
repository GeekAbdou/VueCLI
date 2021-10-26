<template>
  <section class="api-axios">
    <div class="container">
      <input type="text" v-model="username" />
      <button @click.prevent="getRepos">Get Repos</button>
      <div v-for="repo in response" :key="repo.name">
        <h5>{{ repo.name }}</h5>
      </div>
    </div>
  </section>
</template>
<script>
const axios = require("axios");
export default {
  name: "apiAxios",

  data() {
    return {
      username: "",
      response: "",
    };
  },

  methods: {
    getRepos: function () {
      return axios
        .get("https://api.github.com/users/" + this.username + "/repos")
        .then((response) => {
          this.response = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped lang="scss">
.api-axios {
  border: 1px solid rgb(90, 168, 231);
}
</style>
