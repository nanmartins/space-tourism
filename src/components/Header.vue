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


    <button class="hamburger-icon mr-8" @click.stop="(drawer = !drawer)">
      <svg v-if="drawer === false" xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>
    </button>

    <v-navigation-drawer
      v-if="isScreenSmall"
      v-model="drawer"
      location="right"
      temporary
      class="nav-drawer d-flex flex-column pl-12"
    >

      <button @click.stop="(drawer = !drawer)" class="hamburger-icon-close">
        <svg v-if="drawer === true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/></g></svg>
      </button>

      <v-list class="nav-drawer-links-container d-flex flex-column font-barlow-c w-100" style="gap: 32px;">

        <router-link to="/" class="nav-links-mobile">
          <span class="nav-links-span-number font-weight-bold pr-2">00</span>
          <span class="links-mobile">Home</span>
        </router-link>

        <router-link to="/destination/Moon" class="nav-links-mobile" :class="{ active: $route.path.includes('/destination/') }">
          <span class="nav-links-span-number font-weight-bold pr-2">01</span>
          <span class="links-mobile">Destination</span>
        </router-link>

        <router-link to="/crew/Anousheh-Ansari" class="nav-links-mobile" :class="{ active: $route.path.includes('/crew/') }">
          <span class="nav-links-span-number font-weight-bold pr-2">02</span>
          <span class="links-mobile">Crew</span>
        </router-link>

        <router-link to="/technology/Launch-vehicle" class="nav-links-mobile" :class="{ active: $route.path.includes('/technology/') }">
          <span class="nav-links-span-number font-weight-bold pr-2">03</span>
          <span class="links-mobile">Technology</span>
        </router-link>

      </v-list>
    </v-navigation-drawer>


  </nav>
</template>


<script setup>

import { ref, onMounted, onUnmounted } from 'vue'
import { useAppStore } from '../store/app'

const drawer = ref(useAppStore().drawer)
const isScreenSmall = ref(useAppStore().isScreenSmall)

const toggleDrawer = () => {
  useAppStore().toggleDrawer()
}

onMounted(() => {
  window.addEventListener('resize', updateScreenWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenWidth)
})

const updateScreenWidth = () => {
  isScreenSmall.value = window.innerWidth <= 650
}


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
  z-index: 10;
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

.hamburger-icon {
  display: none;
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

  .hamburger-icon {
    display: block;
  }

  .hamburger-icon-close {
    position: absolute;
    top: 35px;
    right: 30px;
  }

  .nav-drawer {
    display: flex;
    position: absolute;
    flex-direction: column;
    background:rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(40.774227142333984px);
  }

  .nav-links-mobile {
    display: flex;
    text-decoration: none;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2.7px;
    color: #FFFFFF;
    padding: 10px 0;
    text-align: center;
  }

  .links-mobile {
    font-weight: 400;
  }

  .nav-drawer-links-container {
    background:rgba(255, 255, 255, 0) !important;
    width: 100%;
    margin-top: 150px;
  }

  .router-link-exact-active {
    text-decoration: none;
    position: relative;
  }

  .router-link-exact-active::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: -30px;
    width: 2px;
    height: 22px;
    background-color: #FFFFFF;
  }

  .v-navigation-drawer__scrim {
    background: transparent;
  }

  .nav-links-span-number {
    display: flex;
  }
}

</style>
