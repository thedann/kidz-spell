<template>
  <div class="app-wrapper">
    <div id="app">
      <MobileMenu
        :mobileMenuIsOpen="mobileMenuIsOpen"
        :toggleMobileMenu="toggleMobileMenu"
        :closeMobileMenu="closeMobileMenu"
      ></MobileMenu>
      <Menu></Menu>
      <div class="router-view-container">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import { getQuestionsFromLocalStorage } from "@/utils/util.js";
import MobileMenu from "@/components/MobileMenu.vue";
import Menu from "@/components/Menu.vue";

export default {
  name: "App",
  components: {
    MobileMenu,
    Menu
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

.button {
  min-height: 3rem;
  min-width: 15rem;
  margin-top: 1rem;
  border-radius: 10px;
  background: transparent;
  text-decoration: none;
}

.button:hover {
  background: #42b983;
  cursor: pointer;
}

.positive-button {
  border: 5px solid #42b983;
}

.negative-button {
  border: 5px solid lightcoral;
  min-width: 10rem;
  margin-top: 3rem;
}

.negative-button:hover {
  background: lightcoral;
}

.error {
  color: lightcoral;
}

a.button {
  padding: 0.5rem 2rem;
  color: black;
  margin-bottom: 2rem;
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
}

input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 1px solid black;
    border-radius: 10px;
}

input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
