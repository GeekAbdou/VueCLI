<template>
  <header class="header">
    <div class="container">
      <div class="header__logo">
        <router-link to="/" tag="li" exact
          ><img src="../../../assets/logo.png" alt="logo"
        /></router-link>
      </div>

      <nav class="header__nav">
        <router-link to="/" tag="li" exact><a>Home</a></router-link>
        <router-link to="/Blog" tag="li"><a>Blog</a></router-link>
        <router-link to="/Features" tag="li"><a>Features</a></router-link>
        <router-link to="/About" tag="li"><a>About</a></router-link>
        <router-link to="/Help" tag="li"><a>Help</a></router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header", 
};
</script>

<style scoped lang="scss">
.header {
  background-color: #dcdcdc;
}
.header,
.container {
  display: flex;
  justify-content: space-between;
  padding: 2px;
  .header__logo {
    img {
      height: 70px;
    }
  }

  .header__nav {
    margin: auto 0;

    a {
      padding: 10px;
      color: #333;
      font-size: 16px;
      font-weight: 600;
      font-family: "Poppins", sans-serif;
    }
  }
}
</style>
