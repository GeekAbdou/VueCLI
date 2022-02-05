<template>
  <div class="home">
    <Header />
    <Landing />
    <Articles />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/global/header/nav.vue";
import Landing from "@/components/Home/landing.vue";
import Articles from "@/components/Home/articles.vue";

export default {
  name: "Home",
  components: {
    Header,
    Landing,
    Articles,
  },
};
</script>
