<template>
  <div id="nav">
    <router-link to="/">Hem</router-link>
    <router-link to="/game">Spela</router-link>
    <router-link to="/create-game">Skapa ett spel</router-link>
    <router-link to="/about">Om KidzSpell</router-link>
  </div>
</template>

<script>
export default {
  name: "Menu"
};
</script>

<style>
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

@media only screen and (max-width: 600px) {
  #nav {
    display: none;
  }
}
</style>
