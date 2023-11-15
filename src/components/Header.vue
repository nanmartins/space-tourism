<template>
  <nav class="header-container">

    <div class="logo-svg-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
      <div class="header-divider">
        <span></span>
      </div>
    </div>

    <div class="header-links font-barlow-c">
      <router-link to="/" class="nav-links">
        <span class="nav-links-span-number font-weight-bold pr-2">00</span>
        <span>Home</span>
      </router-link>

      <router-link to="/destination/Moon" class="nav-links" :class="{ active: $route.path.includes('/destination/') }">
        <span class="nav-links-span-number font-weight-bold pr-2">01</span>
        <span>Destination</span>
      </router-link>

      <router-link to="/crew/Anousheh-Ansari" class="nav-links" :class="{ active: $route.path.includes('/crew/') }">
        <span class="nav-links-span-number font-weight-bold pr-2">02</span>
        <span>Crew</span>
      </router-link>

      <router-link to="/technology/Launch-vehicle" class="nav-links" :class="{ active: $route.path.includes('/technology/') }">
        <span class="nav-links-span-number font-weight-bold pr-2">03</span>
        <span>Technology</span>
      </router-link>
    </div>


    <v-navigation-drawer
      v-model="drawer"
      location="right"
      temporary
      class="nav-drawer"
    >
      <router-link to="/" class="nav-links-mobile">
        <span class="nav-links-span-number font-weight-bold pr-2">00</span>
        <span>Home</span>
      </router-link>

      <router-link to="/destination/Moon" class="nav-links-mobile" :class="{ active: $route.path.includes('/destination/') }">
        <span class="nav-links-span-number font-weight-bold pr-2">01</span>
        <span>Destination</span>
      </router-link>

      <router-link to="/crew/Anousheh-Ansari" class="nav-links-mobile" :class="{ active: $route.path.includes('/crew/') }">
        <span class="nav-links-span-number font-weight-bold pr-2">02</span>
        <span>Crew</span>
      </router-link>

      <router-link to="/technology/Launch-vehicle" class="nav-links-mobile" :class="{ active: $route.path.includes('/technology/') }">
        <span class="nav-links-span-number font-weight-bold pr-2">03</span>
        <span>Technology</span>
      </router-link>

    </v-navigation-drawer>


  </nav>
</template>

<script setup>
// import { ref } from 'vue'
import { useAppStore } from '../store/app'

const drawer = useAppStore().drawer

</script>

<style scoped>

.header-container {
  width: 100vw;
  height: 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 30px;
}

/* LOGO CONTAINER*/
.logo-svg-container {
  display: flex;
  align-items: center;
  padding-left: 60px;
}

/* DIVIDER */
.header-divider {
  display: flex;
  align-items: center;
  margin-left: 50px;
  z-index: 1;
}

.header-divider span {
  background: white;
  height: 1px;
  width: 40vw;
  opacity: 0.2515;
}

/* HEADER LINKS */
.header-links {
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 80px;
  gap: 45px;
  background:rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40.774227142333984px);
  height: 96px;
  width: 55vw;
}

.nav-links {
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2.7px;
  color: #FFFFFF;
}

/* ACTIVE */
.nav-links.active {
  position: relative;
}

.nav-links.active::after {
  content: "";
  position: absolute;
  bottom: -35px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #FFFFFF;
}

.nav-links:hover {
  position: relative;
}

.nav-links:hover::after {
  content: "";
  position: absolute;
  bottom: -35px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #FFFFFF;
  opacity: 0.5021;
}

.router-link-exact-active {
  text-decoration: none;
  position: relative;
}

.router-link-exact-active::after {
  content: "";
  position: absolute;
  bottom: -35px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #FFFFFF;
}


@media only screen and (max-width: 1380px) {

  .header-container {
    width: 100vw;
    height: 96px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
  }

  .logo-svg-container {
    padding-left: 30px;
  }

  .header-divider {
    display: none;
  }

  .header-links {
    justify-content: space-around;
    padding: 0 10px;
    gap: 0;
    width: 66vw;
  }

  .nav-links-span-number {
    display: none;
  }
}

@media only screen and (max-width: 650px) {
  .header-links {
    display: none;
  }

  .nav-drawer {
    display: flex;
    position: relative;
    flex-direction: column;
    background:rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(40.774227142333984px);
    z-index: 100;
  }
}

</style>
