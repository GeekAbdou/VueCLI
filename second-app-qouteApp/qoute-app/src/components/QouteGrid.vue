<template>
  <div class="row">
    <app-qoute
      v-for="(qoute, index) in qoutes"
      :key="(qoute, index)"
      @click="deletedQoute(index)"
      >{{ qoute }}</app-qoute
    >
  </div>
</template>

<script>
import Qoute from "./SingleQoute";

export default {
  props: ["qoutes"],
  components: {
    appQoute: Qoute,
  },
  methods: {
    deleteQoute(index) {
      this.$emit("deletedQoute",index);

    },
  },
};
</script>

<style></style>
