<template>
  <div class="Apps">
    <Header />
    <passwordToggle />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/global/header/nav.vue";
import passwordToggle from "@/components/password-toggle.vue";

export default {
  name: "Apps",
  components: {
    Header,
    passwordToggle,
  },
};
</script>
