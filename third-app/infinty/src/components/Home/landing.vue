<template>
  <section class="landing">
    <div class="container">
      <div class="landing__text">
        <h2>Welcome To The World Of Infinity</h2>
        <p>
          This is an example of decribtion of bla on bla This is an example of
          decribtion of bla on blaThis is an example of decribtion of bla on bla
        </p>
      </div>
      <div class="landing__img">
        <transition name="bounce">
          <img src="../../assets/imgs/langing.png" alt="landing" />
        </transition>
      </div>
      <a
        class="
          landing__arrow
          animate__animated animate__bounce animate__infinite animate__slow
        "
      >
        <fa class="arrow" :icon="['fas', 'angle-double-down']" size="2x" />
      </a>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
@import "../../../scss/base/variables.scss";

.container {
  padding: 0 0 120px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: calc(100vh - 72px);
}
@media (max-width: 768px) {
  .container {
    padding: 0 0 120px 0;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 120px);
  }
  .landing__text {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding-top: 60px;
    h2 {
      width: 100%;
    }
  }
  .landing__img {
    img {
      width: 280px;
      max-width: 100%;
    }
  }
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
      width: 100%;
      font-weight: 800;
      letter-spacing: -1px;
      font-size: 40px;
      color: black;
    }
    p {
      color: #666;
      width: 70%;
      font-size: 18px;
      line-height: 1.7;      
    }
  }
  .landing__img {
    animation: up-and-down 5s linear infinite;
    img {
      width: 600px;
      max-width: 100%;
      animation: up-and-down 5s linear infinite;
    }
  }

  .landing__arrow {
    color: $primary-color;
    position: absolute;
    bottom: 30px;
    left: 50%;

    transform: translateX(-50%);
    transition: $main-trans-dur;
  }
}
</style>
