<template>
  <div class="Apps">
    <Header />
    <passwordToggle />
    <convert-slug />
    <api-axios />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/global/header/nav.vue";
import passwordToggle from "@/components/password-toggle.vue";
import convertSlug from "@/components/convert-slug.vue";
import apiAxios from "@/components/api-axios.vue";

export default {
  name: "Apps",
  components: {
    Header,
    passwordToggle,
    convertSlug,
    apiAxios,
  },
};
</script>
