<template>
  <div class="app-wrapper">
    <div id="app">
      <MobileMenu
        :mobileMenuIsOpen="mobileMenuIsOpen"
        :toggleMobileMenu="toggleMobileMenu"
        :closeMobileMenu="closeMobileMenu"
      ></MobileMenu>
      <div id="nav">
        <router-link to="/">Hem</router-link>
        <router-link to="/game">Spela</router-link>
        <router-link to="/create-game">Skapa ett spel</router-link>
        <router-link to="/about">Om KidzSpell</router-link>
      </div>
      <div class="router-view-container">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import { getQuestionsFromLocalStorage } from "@/utils/util.js";
import MobileMenu from "@/components/MobileMenu.vue";

export default {
  name: "App",
  components: {
    MobileMenu
  },
  data: () => {
    return {
      questions: getQuestionsFromLocalStorage(),
      mobileMenuIsOpen: false
    };
  },
  watch: {
    $route() {
      this.mobileMenuIsOpen = false;
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuIsOpen = !this.mobileMenuIsOpen;
    },
    closeMobileMenu() {
      this.mobileMenuIsOpen = false;
    }
  }
};
</script>


<style>
body {
  margin: 0;
}
.app-wrapper {
  display: block;
  padding: 0.5rem;
  background: #42b983;
  min-height: 100vh;
}

.router-view-container {
  max-width: 60rem;
  margin: auto;
}

#app {
  background: white;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 95vh;
  border-radius: 50px;
}

.hidden {
  display: none;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 1rem;
  text-decoration: none;
  font-size: 1.25rem;
}

#nav a:last-child {
  margin-right: 0;
}

#nav a:hover {
  border-bottom: 1px solid #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
  border-bottom: 1px solid #42b983;
}

#mobile-nav {
  display: none;
  z-index: 10;
}

@media only screen and (max-width: 600px) {
  .app-wrapper {
    display: block;
    min-height: 97.6vh;
  }

  #app {
    min-height: 80vh;
    border-radius: 10px;
    margin-top: 2.5rem;
    padding: 0.5rem;
  }
  #nav {
    display: none;
  }

  #mobile-nav {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    background: #42b983;
    z-index: 20;
  }

  #mobile-nav.menuIsOpen {
    position: fixed;
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
    height: 93vh;
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

input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}
</style>
