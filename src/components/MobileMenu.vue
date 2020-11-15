<template>
  <div
    id="mobile-nav"
    v-bind:class="{menuIsOpen : mobileMenuIsOpen}"
    v-on="mobileMenuIsOpen ? { click : closeMobileMenu } : {}"
  >
    <!-- <button v-on:click="toggleMobileMenu">
          <img v-bind:class="{hidden : mobileMenuIsOpen }" :src="require('../assets/menu-alt.png')">
          <img v-bind:style="{hidden : !mobileMenuIsOpen }" v-if="mobileMenuIsOpen" :src="require('../assets/close.png')">
    </button>-->
    <div class="container" v-bind:class="{'change' : mobileMenuIsOpen}" v-on:click="toggleMobileMenu">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>
    <div class="mobile-menu" v-bind:class="{'mobile-menu-open' : mobileMenuIsOpen}">
      <router-link to="/">Hem</router-link>
      <router-link to="/game">Spela</router-link>
      <router-link to="/create-game">Skapa ett spel</router-link>
      <router-link to="/about">Om KidzSpell</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileMenu",
  props: {
    mobileMenuIsOpen: Boolean,
    toggleMobileMenu: Function,
    closeMobileMenu: Function
  },
  methods: {
  }
};
</script>

<style>
#mobile-nav {
  display: none;
  z-index: 10;
}

@media only screen and (max-width: 600px) {
  #mobile-nav {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    background: #42b983;
  }

  #mobile-nav.menuIsOpen {
    position: fixed;
  }

  #mobile-nav button {
    width: 5rem;
    height: 3rem;
    background: transparent;
    border: 0;
  }

  #mobile-nav button img {
    max-width: 100%;
    max-height: 100%;
    background: "./assets/menu-alt.png";
  }

  .mobile-menu {
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
    background: #42b983;
    top: 3rem;
    width: 100vw;
    display: flex;
    height: 100vh;
    left: -100%;
    position: absolute;
    transition: left 0.75s;
  }

  .mobile-menu.mobile-menu-open {
    left: 0;
  }

  .mobile-menu a {
    color: white;
    font-size: 1.5rem;
    text-decoration: none;
    border-bottom: 1px solid white;
    padding: 0.5rem 0;
    display: inline;
  }

  .mobile-menu a:hover {
    background: #42b983;
    color: #2c3e50;
  }

  .mobile-menu a:last-child {
    border-bottom: 0;
  }
}

/* ------------- Menu icon CSS below ------------- */
.container {
  display: inline-block;
  cursor: pointer;
  margin-left: 10px;
  margin-top: 5px;
}

.bar1,
.bar2,
.bar3 {
  width: 35px;
  height: 5px;
  background-color: black;
  margin: 6px 0;
  transition: 0.4s;
}

.change .bar1 {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-9px, 6px);
}

.change .bar2 {
  opacity: 0;
}

.change .bar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}
</style>


