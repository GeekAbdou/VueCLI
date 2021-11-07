<template>
  <div class="row">
        <form action="">
            <textarea class="add-qoute" v-model="qoute"></textarea>
            <button @click.prevent="createQoute">Add Qoute</button>
        </form>
   </div>
</template> 

<script>

export default { 
    data: function(){
        return{
            qoute:"",
        }
    },
    methods: {
        createQoute(){
            this.$emit('createQoute',this.qoute);
            this.qoute='';
        }
    },
};
</script>

<style></style>
