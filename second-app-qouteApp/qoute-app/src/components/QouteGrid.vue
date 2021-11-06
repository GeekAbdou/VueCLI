<template>
  <div class="row">
    <app-qoute v-for="qoute in qoutes" :key="qoute">{{qoute}}</app-qoute>
   </div>
</template>

<script>
  import Qoute from './SingleQoute';

export default {
  props:['qoutes'],
  components:{
    appQoute: Qoute,
  }
};
</script>

<style></style>
