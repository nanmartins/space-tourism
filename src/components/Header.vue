<template>
  <div class="header-container">

    <div class="logo-svg-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
    </div>

    <div class="header-divider">
      <span></span>
    </div>

    <div class="header-links font-barlow">
      <router-link to="/" class="nav-links">
        <span class="font-weight-bold pr-1">00</span> Home
      </router-link>

      <router-link to="/destination" class="nav-links">
        <span class="font-weight-bold pr-1">01</span> Destination
      </router-link>

      <router-link to="/crew" class="nav-links">
        <span class="font-weight-bold pr-1">02</span> Crew
      </router-link>

      <router-link to="/technology" class="nav-links">
        <span class="font-weight-bold pr-1">03</span> Technology
      </router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.header-container {
  width: 100vw;
  /* background: red; */
  height: 96px;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  position: fixed;
  top: 40px;
  /* right: 0; */
  /* background: green; */
}

/* LOGO */
.logo-svg-container {
  display: flex;
  position: fixed;
  align-items: center;
  top: 40px;
  left: 50px;
  height: 96px;
}

/* DIVIDER */
.header-divider {
  display: flex;
  align-items: center;
  position: fixed;
  left: 170px;
  z-index: 10;
}

.header-divider span {
  /* display: flex; */
  background: white;
  height: 1px;
  width: 38vw;
  opacity: 0.2515;
}

/* HEADER LINKS */
.header-links {
  display: flex;
  position: fixed;
  top: 40px;
  right: 0;
  align-items: center;
  justify-content: left;
  padding-left: 135px;
  gap: 60px;
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


/* ACTIVE */
.router-link-exact-active {
  /* color: red; */
  text-decoration: none; /* Removemos o sublinhado padrão */
  position: relative; /* Tornamos o link relativo para que o sublinhado absoluto funcione */
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
