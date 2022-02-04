<template>
  <header class="header">
    <div class="container">
      <div class="header__logo">
        <router-link to="/" tag="li" exact> Infinity </router-link>
      </div>

      <nav>
        <ul class="header__nav-links">
          <li>
            <router-link to="/" exact><a class="nav-link">Home</a></router-link>
          </li>
          <li>
            <router-link to="/services"
              ><a class="nav-link">Services</a></router-link
            >
          </li>
          <li>
            <router-link to="/pricing"
              ><a class="nav-link">Pricing</a>
            </router-link>
          </li>
          <li>
            <router-link to="/contact-us"
              ><a class="nav-link">Contact Us</a></router-link
            >
          </li>
          <li>
            <a href="#" class="nav-link"> Other Links </a>
            <!-- Start Megamenu -->
            <div class="header__mega-menu">
              <div class="image">
                <img src="../../../assets/imgs/megamenu.png" alt="" />
              </div>

              <ul class="header__mega-menu-links">
                <li>
                  <a href="#testimonials">
                    <fa :icon="['fas', 'comments']" />
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#team">
                    <fa :icon="['fas', 'user']" />

                    Team Members
                  </a>
                </li>
                <li>
                  <a href="#services">
                    <fa :icon="['fas', 'building']" />
                    Services
                  </a>
                </li>
                <li>
                  <a href="#our-skills">
                    <fa :icon="['fas', 'check-circle']" />
                    Our Skills
                  </a>
                </li>
                <li>
                  <a href="#work-steps">
                    <fa :icon="['fas', 'clipboard']" />
                    How It Works
                  </a>
                </li>
              </ul>

              <ul class="header__mega-menu-links">
                <li>
                  <a href="#events">
                    <fa :icon="['fas', 'calendar-alt']" />
                    Events
                  </a>
                </li>
                <li>
                  <a href="#pricing">
                    <fa :icon="['fas', 'server']" />
                    Pricing Plans
                  </a>
                </li>
                <li>
                  <a href="#video">
                    <fa :icon="['fas', 'play-circle']" />
                    Top Videos
                  </a>
                </li>
                <li>
                  <a href="#stats">
                    <fa :icon="['fas', 'chart-bar']" />
                    Stats
                  </a>
                </li>
                <li>
                  <a href="#discount">
                    <fa :icon="['fas', 'percent']" />
                    Request A Discount
                  </a>
                </li>
              </ul>
            </div>
            <!-- End Megamenu -->
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
@media (max-width: 768px) {
  .container {
    justify-content: center;
  }
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

  .header__nav-links {
    display: flex;

    li:hover .header__mega-menu {
      opacity: 1;
      z-index: 100;
      top: calc(100% + 1px);
    }

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
  }
  .nav-link {
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

    @media (max-width: 450px) {
      .nav-link {
        font-size: 13px;
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

  .header__mega-menu {
    position: absolute;
    display: flex;
    width: 100%;
    left: 0;
    padding: 30px;
    border-bottom: 3px solid $primary-color;
    background-color: white;
    z-index: -1;
    opacity: 0;
    gap: 50px;
    top: calc(100% + 60px);
    transition: $main-trans-dur, opacity $main-trans-dur;
    .image img {
      max-width: 90%;
    }
    @media (max-width: 991px) {
      .image img {
        display: none;
      }
    }
  }
    @media (max-width: 767px) {
      .header__mega-menu  {
        flex-direction:column;
        gap:0px;
        padding: 8px
      }
    }

  .header__mega-menu-links {
    min-width: 250px;
    li {
      position: relative;
      padding: 8px;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 0px;
        height: 100%;
        background-color: #e6e6e6;
        z-index: -1;
        transition: $main-trans-dur;
      }

      &:hover::before {
        width: 100%;
      }
    }
    a {
      color: $primary-color;
      font-size: 18px;
      font-weight: bold;

      svg {
        margin: 0 10px 0 0;
      }
    }

    li:not(:last-child) {
      border-bottom: 1px solid #e9e6e6;
    }

    @media (max-width: 767px) {
    &:first-of-type li:last-child {
      border-bottom: 1px solid #e9e6e6;
      }
    }
  }
}
</style>
