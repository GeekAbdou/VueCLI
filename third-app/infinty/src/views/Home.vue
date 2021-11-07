<template>
  <div class="home">
    <Header />
    <Landing />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/global/header/nav.vue";
import Landing from "@/components/Home/landing.vue";

export default {
  name: "Home",
  components: {
    Header,
    Landing,
  },
};
</script>
