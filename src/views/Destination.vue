<template>
  <div class="destination-view">
    <v-row class="align-center justify-center ma-0">

      <v-col cols="5">
        <h2><span>01</span> Pick your destination</h2>

      </v-col>

      <v-col cols="5">
        <div>
          <router-link to="/destination" @click="updateDestination(data.destinations[0])">Moon</router-link>
          <router-link to="/destination" @click="updateDestination(data.destinations[1])">Mars</router-link>
          <router-link to="/destination" @click="updateDestination(data.destinations[2])">Europa</router-link>
          <router-link to="/destination" @click="updateDestination(data.destinations[3])">Titan</router-link>
        </div>

        <div class="destination-detail">
          <h2>{{ currentDestination.name }}</h2>
          <img :src="currentDestination.images.png" alt="Destination Image">
          <p>{{ currentDestination.description }}</p>
          <p>Distance: {{ currentDestination.distance }}</p>
          <p>Travel Time: {{ currentDestination.travel }}</p>
        </div>

      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Defina um estado para armazenar as informações do destino atualmente exibido
const currentDestination = ref(null);

// Função para atualizar o estado com as informações do destino
const updateDestination = (destination) => {
  currentDestination.value = destination;
};

// Exemplo de dados (substitua pelo seu conjunto de dados)
const data = {
  destinations: [
    {
      "name": "Moon",
      "images": {
        "png": "./assets/destination/image-moon.png",
        "webp": "./assets/destination/image-moon.webp"
      },
      "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      "distance": "384,400 km",
      "travel": "3 days"
    },
    {
      "name": "Mars",
      "images": {
        "png": "./assets/destination/image-mars.png",
        "webp": "./assets/destination/image-mars.webp"
      },
      "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      "distance": "225 mil. km",
      "travel": "9 months"
    },
    {
      "name": "Europa",
      "images": {
        "png": "./assets/destination/image-europa.png",
        "webp": "./assets/destination/image-europa.webp"
      },
      "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      "distance": "628 mil. km",
      "travel": "3 years"
    },
    {
      "name": "Titan",
      "images": {
        "png": "./assets/destination/image-titan.png",
        "webp": "./assets/destination/image-titan.webp"
      },
      "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      "distance": "1.6 bil. km",
      "travel": "7 years"
    }
    // Adicione outros destinos aqui
  ]
};

// Ao carregar o componente, defina um destino inicial (por exemplo, o primeiro destino)
currentDestination.value = data.destinations[0];
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
