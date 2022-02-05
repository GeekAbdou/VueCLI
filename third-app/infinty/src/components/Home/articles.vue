<template>
  <section class="articles">
    <div class="container">
      <h2 class="articles__main-title main-title">Articles</h2>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
@import "../../../scss/base/variables.scss";
.articles {
  padding: $sec-padding-top 0 $sec-padding-bottom 0;

  .main-title {
    text-transform: uppercase;
    padding: 10px 20px;
    font-weight: bold;
    font-size: 30px;
    color: black;
    border: 2px solid black;
    width: fit-content;
    margin: 0 auto 80px;
    position: relative;
    z-index: 1;

    &::before,
    &::after {
      content: "";
      width: 15px;
      height: 15px;
      background-color: $primary-color;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      border-radius: 50%;
    }
    &::before {
      left: -50px;
    }
    &::after {
      right: -50px;
    }
    .main-title:hover::before{
      z-index: -1;
      animation: fill-left $main-trans-dur linear forwards;
    }
    @keyframes fill-left{
      50%{
        left: 0;
        
      }
    }
  }
}
</style>
