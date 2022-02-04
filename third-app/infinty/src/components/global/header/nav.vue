<template>
  <header class="header">
    <div class="container">
      <div class="header__logo">
        <router-link to="/" tag="li" exact> Infinity </router-link>
      </div>

      <nav class="header__nav-links">
        <ul>
          <li>
            <router-link to="/" tag="li" exact><a>Home</a></router-link>
          </li>
          <li>
            <router-link to="/services" tag="li"><a>Services</a></router-link>
          </li>
          <li>
            <router-link to="/pricing" tag="li"><a>Pricing</a> </router-link>
          </li>
          <li>
            <router-link to="/contact-us" tag="li"
              ><a>Contact Us</a></router-link
            >
          </li>
        </ul>
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
@import "../../../../scss/base/variables.scss";

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  padding: 1px;
}
.header {
  box-shadow: 0 0 10px #ddd;
  position: relative;
  background: white;

  .header__logo {
    display: flex;
    align-items: center;
    height: 70px;
    color: $primary-color;
    font-size: 28px;
    font-weight: 800;
  }

  .header__nav-links ul {
    display: flex;
    @media (max-width: 768px) {
      .header__nav-links {
        a {
          padding: 0 4px;
        }
      }
      .header__logo {
        margin: auto;
      }
    }
    a {
      
      display: flex;
      align-items: center;
      position: relative;
      height: 70px;
      padding: 0 10px;
      color: #333;
      font-size: 17px;
      font-weight: 400;
      font-family: "Lato", sans-serif;
      overflow: hidden;

      @media (max-width: 768px) {
        a {
          font-size: 15px;
          font-weight: 400;
        }
      }

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 4px;
        background-color: $primary-color;
        top: 0px;
        left: -100%;
        transition: $main-trans-dur;
      }



      &:hover::before {
        left: 0;
        overflow: hidden;
      }
    }
  }
}
</style>
