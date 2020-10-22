<template>
  <div class="app-wrapper">
    <div id="app">
      <div
        id="mobile-nav"
        v-bind:class="{menuIsOpen : mobileMenuIsOpen}"
        v-on="mobileMenuIsOpen ? { click : closeMobileMenu } : {}"
      >
        <button v-on:click="toggleMobileMenu">
          <img v-bind:class="{hidden : mobileMenuIsOpen }" :src="require('./assets/menu-alt.png')">
          <img v-bind:style="{hidden : !mobileMenuIsOpen }" v-if="mobileMenuIsOpen" :src="require('./assets/close.png')">
        </button>
        <div class="mobile-menu" v-bind:class="{'mobile-menu-open' : mobileMenuIsOpen}">
          <router-link to="/">Hem</router-link>
          <router-link to="/game">Spela</router-link>
          <router-link to="/create-game">Skapa ett spel</router-link>
          <router-link to="/about">Om KidzSpell</router-link>
        </div>
      </div>
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

export default {
  name: "App",
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
}

@media only screen and (max-width: 600px) {
  .app-wrapper {
    display: block;
    min-height: 100vh;
  }

  #app {
    min-height: 98vh;
    border-radius: 10px;
    margin-top: 3rem;
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
    background: './assets/menu-alt.png'
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
    transition: left .75s;
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
