<template>
  <div class="container">
    <new-qoute @createQoute="createQoute"> </new-qoute>
    <app-qoute-grid :qoutes="qoutes"> </app-qoute-grid>
  </div>
</template>

<script>
import QouteGrid from "./components/QouteGrid.vue";
import NewQoute from "./components/NewQoute.vue";

export default {
  data: function () {
    return {
      qoutes: [],
      maxQoutes: 10,
    };
  },
  components: {
    appQouteGrid: QouteGrid,
    newQoute: NewQoute,
  },
  methods: {
      createQoute(qoute){
          this.qoutes.push(qoute);
      }
  },
};
</script>

<style></style>
