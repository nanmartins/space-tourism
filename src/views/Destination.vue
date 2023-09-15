<template>
  <div class="destination-view">
    <v-row class="align-center justify-center ma-0">
      <v-col cols="5" class="dest-left-container">
        <h2 class="font-barlow-c text-uppercase"><span class="font-barlow-c pr-2">01</span> Pick your destination</h2>
        <v-img :src="imageUrl" class="dest-left-image" width="450px"></v-img>
      </v-col>

      <v-col cols="5" class="dest-right-container">
        <div class="dest-nav-links font-barlow-c">
          <router-link to="/destination/Moon" class="nav-links">Moon</router-link>
          <router-link to="/destination/Mars" class="nav-links">Mars</router-link>
          <router-link to="/destination/Europa" class="nav-links">Europa</router-link>
          <router-link to="/destination/Titan" class="nav-links">Titan</router-link>
        </div>

        <div class="destination-detail">
          <h2>{{ currentDestination.name }}</h2>
          <p>{{ currentDestination.description }}</p>
          <p>Distance: {{ currentDestination.distance }}</p>
          <p>Travel Time: {{ currentDestination.travel }}</p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import MoonImg from '@/assets/destination/image-moon.png'
import MarsImg from '@/assets/destination/image-mars.png'
import EuropaImg from '@/assets/destination/image-europa.png'
import TitanImg from '@/assets/destination/image-titan.png'

const route = useRoute()

const currentDestination = ref({
  name: 'Moon',
  images: {
    png: '../assets/destination/image-moon.png',
    webp: '../assets/destination/image-moon.webp',
  },
  description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
  distance: '384,400 km',
  travel: '3 days',
});

const imageMap = {
  'Moon': MoonImg,
  'Mars': MarsImg,
  'Europa': EuropaImg,
  'Titan': TitanImg,
}

const imageUrl = ref(MoonImg)

const updateImage = () => {
  const urlParts = route.path.split('/')
  const lastPart = urlParts[urlParts.length -1]
  imageUrl.value = imageMap[lastPart]
}

watch(() => route.path, updateImage, { immediate: true })

const data = {
  destinations: [
    {
      "name": "Moon",
      "images": {
        "png": "../assets/destination/image-moon.png",
        "webp": "../assets/destination/image-moon.webp"
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
  ]
}

const updateDestination = () => {
  const destinationName = route.params.name
  currentDestination.value = data.destinations.find(dest => dest.name === destinationName)
}

watch(() => route.params.name, updateDestination)
onMounted(updateDestination)

</script>

<style scoped>

.destination-view {
  background-image: url('../assets/destination/background-destination-desktop.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
}

/* LEFT  */
.dest-left-container {
  margin-top: 200px;
}

.dest-left-container span {
  font-size: 28px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 4.725px;
  opacity: 0.25;
}

.dest-left-container h2 {
  font-size: 28px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 4.725px;
}

.dest-left-image {
  margin-left: 120px;
  margin-top: 150px;
}

/* RIGHT */
.dest-right-container {
  margin-top: 220PX;
}

.dest-nav-links {
  display: flex;
  gap: 20px;
}

/* LINKS ACTIVE */

</style>
