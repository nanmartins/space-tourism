<template>
  <div class="destination-view">
    <v-row class="align-center justify-center ma-0">

      <v-col cols="5">
        <h2><span>01</span> Pick your destination</h2>

      </v-col>

      <v-col cols="5">
        <div>
          <router-link to="/destination">Moon</router-link>
          <router-link to="/destination">Mars</router-link>
          <router-link to="/destination">Europa</router-link>
          <router-link to="/destination">Titan</router-link>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>

</script>

<style scoped>

.destination-view {
  background-image: url('../assets/destination/background-destination-desktop.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
}
</style>
