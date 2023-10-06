<template>
  <div class="header-container">

    <div class="logo-svg-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
    </div>

    <div class="header-divider">
      <span></span>
    </div>

    <div class="header-links font-barlow-c">
      <router-link to="/" class="nav-links">
        <span class="font-weight-bold pr-1">00</span> Home
      </router-link>

      <router-link to="/destination/Moon" class="nav-links" :class="{ active: $route.path.includes('/destination/') }">
        <span class="font-weight-bold pr-1">01</span> Destination
      </router-link>

      <router-link to="/crew/Anousheh-Ansari" class="nav-links" :class="{ active: $route.path.includes('/crew/') }">
        <span class="font-weight-bold pr-1">02</span> Crew
      </router-link>

      <router-link to="/technology/Launch-vehicle" class="nav-links" :class="{ active: $route.path.includes('/technology/') }">
        <span class="font-weight-bold pr-1">03</span> Technology
      </router-link>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

.header-container {
  width: 100vw;
  height: 96px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 30px;
}

/* LOGO */
.logo-svg-container {
  display: flex;
  position: fixed;
  align-items: center;
  top: 30px;
  left: 60px;
  height: 96px;
}

/* DIVIDER */
.header-divider {
  display: flex;
  align-items: center;
  position: fixed;
  left: 165px;
  z-index: 10;
}

.header-divider span {
  background: white;
  height: 1px;
  width: 39vw;
  opacity: 0.2515;
}

/* HEADER LINKS */
.header-links {
  display: flex;
  position: fixed;
  top: 30px;
  right: 0;
  align-items: center;
  justify-content: left;
  padding-left: 130px;
  gap: 50px;
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
</style>
