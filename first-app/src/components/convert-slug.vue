<template>
  <section class="convert-slug">
    <div class="container">
      <form action="">
        <div class="convert-slug__input">
          <input type="text" placeholder="Your Title" v-model="title" />
          <button @click.prevent="toSlug">Convert To slug</button>
        </div>
        <div class="convert-slug__lable">
          http://www.example.com/<span>{{ slug }}</span>
        </div>
      </form>
    </div>
  </section>
</template>
<script>
export default {
  name: "passwordToggle",

  data() {
    return {
      title: "",
      slug: "",
    };
  },

  methods: {
    toSlug() {
      var convertedSlug = this.title;
      convertedSlug = convertedSlug.toLowerCase();
      convertedSlug = convertedSlug.replace(/&/g, " ");
      convertedSlug = convertedSlug.replace(/\s+/g, "-");
      this.slug = convertedSlug;
    },
  },
};
</script>
<style scoped lang="scss">
.convert-slug {
  border: 1px solid rgb(90, 168, 231);

  .convert-slug__input {
    padding-right: 10px;

    button {
      border: none;
      background-color: #0d6efd;
      margin-left: 20px;
      padding: 13px;
    }
  }

  .convert-slug__lable {
    width: fit-content;
    background-color: rgb(173, 173, 173);
    padding: 25px;
    margin-top: 10px;
    font-size: 20px;
    height: 80px;
  }

  input {
    padding: 10px;
    font-size: 18px;
    width: 600px;
    border: none;
    border: 2px solid rgb(173, 173, 173);
    transition: 0.3s;
  }

  input:focus {
    width: 250px;
    outline: none;
    width: 600px;
    border: 2px solid rgb(29, 103, 201);
    padding-left: 10px;
  }
}
</style>
