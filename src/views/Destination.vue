<template>
  <div class="destination-view">

    <div class="dist-url-title">
      <h2 class="dest-left-pick font-barlow-c text-uppercase"><span class="dest-left-pick-span font-barlow-c pr-2">01</span> Pick your destination</h2>
    </div>

    <v-row class="dest-row-container align-center justify-center align-items-center ma-0">

      <v-col cols="10" md="6" lg="4" xl="4" class="dest-left-container pa-0">
        <!-- <h2 class="dest-left-pick font-barlow-c text-uppercase"><span class="dest-left-pick-span font-barlow-c pr-2">01</span> Pick your destination</h2> -->
        <v-img :src="imageUrl" class="dest-left-image"></v-img>
      </v-col>

      <v-col cols="10" md="6" lg="4" xl="4" class="dest-right-container pa-0 pl-lg-16">
        <div class="dest-nav-links font-barlow-c mb-8">
          <router-link to="/destination/Moon" class="nav-links">Moon</router-link>
          <router-link to="/destination/Mars" class="nav-links">Mars</router-link>
          <router-link to="/destination/Europa" class="nav-links">Europa</router-link>
          <router-link to="/destination/Titan" class="nav-links">Titan</router-link>
        </div>

        <div class="dest-right-details">
          <h2 class="font-bellefair py-5">{{ currentDestination.name }}</h2>
          <p class="font-barlow text-details">{{ currentDestination.description }}</p>

          <v-divider class="dest-right-divider mt-10 mb-6"></v-divider>

          <div class="d-flex dest-details-bottom">
            <div>
              <p class="dest-right-distance font-barlow-c text-details">Avg. Distance</p>
              <p class="dest-right-distance-km font-bellefair">{{ currentDestination.distance }}</p>
            </div>

            <div>
              <p class="dest-right-travel font-barlow-c text-details">Est. Travel Time</p>
              <p class="dest-right-travel-time font-bellefair">{{ currentDestination.travel }}</p>
            </div>
          </div>

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
  padding: 200px 0 50px 0;
  height: 100%;
  overflow: hidden;
}

.destination-view::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(211, 211, 211, 0.04);
  mix-blend-mode: screen;
  pointer-events: none;
}

.dist-url-title {
  padding-left: 65px;
}

.dist-url-title span {
  font-size: 28px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 4.725px;
  opacity: 0.25;
}

.dist-url-title h2 {
  font-size: 28px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 4.725px;
}

.dest-row-container {
  padding: 100px 0 50px 0;
  height: 100%;
  gap: 40px;
}

.dest-left-image {
  max-width: 500px;
  width: 100%;
}

/* RIGHT */
.dest-nav-links {
  display: flex;
  gap: 20px;
}

.nav-links {
  color: #D0D6F9;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2.7px;
}

.dest-right-details h2 {
  font-size: 100px;
  text-transform: uppercase;
  font-weight: 400;
  line-height: normal;
}

.dest-right-details p {
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
  max-width: 450px;
}

.dest-right-divider {
  max-width: 435px;
}

.dest-right-distance, .dest-right-travel {
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 2.362px;
  margin-bottom: 12px;
}

.dest-right-distance {
  margin-right: 90px;
}

.dest-right-distance-km, .dest-right-travel-time {
  font-size: 28px;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
}

/* LINKS ACTIVE */
.nav-links {
  position: relative;
}

.nav-links:hover::after {
  content: "";
  position: absolute;
  bottom: -15px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #FFFFFF;
  opacity: 0.5;
}

.router-link-exact-active {
  position: relative;
  color: #FFFFFF;
}

.router-link-exact-active::after {
  content: "";
  position: absolute;
  bottom: -15px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #FFFFFF;
}


/* MEDIAQUERY */
/* screen width > 2000px */
@media only screen  and (min-width: 2000px) {
  .dest-left-image {
    max-width: 750px;
  }
}

@media only screen and (max-width: 1279px) {
  .destination-view {
    background-image: url('../assets/destination/background-destination-tablet.jpg');
    padding: 150px 0 20px 0;
  }

  .dist-url-title {
    padding-left: 35px;
  }

  .dest-left-container {
    display: flex;
    justify-content: center;
  }

  .dest-left-image {
    max-width: 450px;
  }

  .dest-row-container {
    width: 100%;
  }

  .dest-nav-links {
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    gap: 0;
    width: 80%;
  }

  .dest-right-details h2 {
    text-align: center;
    font-size: 100px;
    text-transform: uppercase;
    font-weight: 400;
    line-height: normal;
  }

  .dest-right-details p {
    text-align: center;
    max-width: 100%;
  }

  .dest-right-divider {
    max-width: 100%;
  }

  .dest-details-bottom {
    justify-content: space-around;
  }

  .dest-right-distance, .dest-right-travel {
    margin-right: 0;
    margin-bottom: 10px;
  }
}

@media only screen and (max-width: 650px) {

  .destination-view {
    background-image: url('../assets/destination/background-destination-tablet.jpg');
    padding: 110px 0 0 0;
  }

  .dist-url-title {
    transform: scale(0.8);
    padding: 0;
    text-align: center;
  }
  .dest-row-container {
    transform: scale(0.9);
    padding-top: 10px;
  }

  .dest-details-bottom {
    flex-direction: column;
    gap: 40px
  }

  .dest-right-distance, .dest-right-travel {
    transform: scale(1.2);
  }

  .dest-right-distance-km, .dest-right-travel-time {
    transform: scale(1.2);
  }
}

</style>
