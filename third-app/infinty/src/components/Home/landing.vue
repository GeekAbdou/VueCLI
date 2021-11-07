<template>
  <section class="landing">
    <div class="container">
      <div class="landing__text">
        <h2>Welcome To The World Of Infinity</h2>
        <p>This is an example of decribtion of bla on bla</p>
      </div>
      <div class="landing__img">
        <img src="../../assets/imgs/langing.png" alt="landing" />
      </div>
      <a class="landing__arrow"></a>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
.container {
  padding: 0 0 120px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: calc(100vh - 70px);
}

.landing {
  &::before {
    content: "";
    position: absolute;
    background-color: #ececec;
    width: 100%;
    height: 100%;
    left: 0;
    top: -50px;
    transform: skewY(-7deg);
    transform-origin: top left;
    z-index: -1;
  }
  position: relative;
  .landing__text {
    h2 {
      width: 80%;
      font-weight: 800;
    }
  }
  .landing__img {
    img {
      width: 550px;
      max-width: 100%;
    }
  }
}
</style>
