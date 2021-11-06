<template>
  <div class="container">
    <app-qoute-grid :qoutes="qoutes"> </app-qoute-grid>
  </div>
</template>

<script>
import QouteGrid from "./components/QouteGrid.vue";

export default {
  data: function () {
    return {
      qoutes: ['Just Sinlge Qoute','Just Sinlge Qoute','Just Sinlge Qoute'],
      maxQoutes: 10,
    };
  },
  components: {
    appQouteGrid: QouteGrid,
  },
};
</script>

<style></style>
