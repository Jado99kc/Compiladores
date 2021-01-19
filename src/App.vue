<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/home">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </router-link>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" @click="toggleMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu"
           :class="{ 'is-active': menuActive }">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/lexicos">
            Lexicos
          </router-link>
          <router-link class="navbar-item" to="/act2">
            Act 2
          </router-link>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  data(){
    return{
      menuActive: false
    }
  },
  methods:{
    toggleMenu() {
      this.menuActive = !this.menuActive
    }
  }
}
</script>
<style>
*{
font-family: Montserrat, sans-serif;
}
</style>
