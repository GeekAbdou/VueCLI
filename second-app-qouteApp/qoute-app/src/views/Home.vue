<template>
  <GridQoute msg="Welcome to Your Vue.js App" />
  <Qoute msg="Welcome to Your Vue.js App" />
</template>

<script>
// @ is an alias to /src
import GridQoute from "@/components/GridQoute.vue";
import Qoute from "@/components/Qoute.vue";

export default {
  name: "Home",
  components: {
    GridQoute,
    Qoute,
  },
};
</script>
