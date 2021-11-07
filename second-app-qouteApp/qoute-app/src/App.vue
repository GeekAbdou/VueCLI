<template>
  <div class="container">
    <new-qoute @createQoute="createQoute"> </new-qoute>
    <app-qoute-grid :qoutes="qoutes" @deleteQoute='deleteQoute'> </app-qoute-grid>
  </div>
</template>

<script>
import QouteGrid from "./components/QouteGrid.vue";
import NewQoute from "./components/NewQoute.vue";

export default {
  data: function () {
    return {
      qoutes: [],
    };
  },
  components: {
    appQouteGrid: QouteGrid,
    newQoute: NewQoute,
  },
  methods: {
      createQoute(qoute){
          this.qoutes.push(qoute);
      },
      deleteQoute(index){
          this.qoutes.splice(index,1);
      }
  },
};
</script>

<style></style>
