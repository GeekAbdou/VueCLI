<template>
  <QouteGrid />
  <SingleQoute />
</template>

<script>
// @ is an alias to /src
import QouteGrid from "@/components/QouteGrid.vue";
import SingleQoute from "@/components/SingleQoute.vue";

export default {
  name: "Home",
  components: {
    QouteGrid,
    SingleQoute,
  },
};
</script>
