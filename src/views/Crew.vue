<template>
  <div class="crew-view">

    <div class="crew-meet-title">
      <h2 class="font-barlow-c text-uppercase"><span class="font-barlow-c pr-2">02</span> Meet  your crew</h2>
    </div>

    <v-row class="crew-row-container">

      <v-col cols="12" md="6" lg="5" xl="4" class="crew-left-container justify-center pa-0">
        <!-- <div class="crew-left-div"> -->

          <h2 class="crew-left-role font-bellefair">{{ currentCrew.role }}</h2>
          <h1 class="crew-left-name font-bellefair">{{ currentCrew.name }}</h1>

          <p class="crew-left-bio font-barlow text-details">{{ currentCrew.bio }}</p>

          <div class="d-flex crew-nav-links">
            <router-link to="/crew/Anousheh-Ansari" class="nav-links"></router-link>
            <router-link to="/crew/Douglas-Hurley" class="nav-links"></router-link>
            <router-link to="/crew/Mark-Shuttleworth" class="nav-links"></router-link>
            <router-link to="/crew/Victor-Glover" class="nav-links"></router-link>
          </div>
        <!-- </div> -->

      </v-col>

      <v-col cols="12" md="6" lg="5" xl="4" class="crew-right-container pa-0">
        <v-img :src="imageUrl" class="crew-right-img"></v-img>
        <!-- <hr v-if="isScreenSmall" class="img-border-bottom"> -->
      </v-col>

    </v-row>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import Crew01Img from '@/assets/crew/image-anousheh-ansari.png'
import Crew02Img from '@/assets/crew/image-douglas-hurley.png'
import Crew03Img from '@/assets/crew/image-mark-shuttleworth.png'
import Crew04Img from '@/assets/crew/image-victor-glover.png'
import { useAppStore } from '../store/app'


const isScreenSmall = ref(useAppStore().isScreenSmall)
const route = useRoute()

onMounted(() => {
  window.addEventListener('resize', updateScreenWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenWidth)
})

const updateScreenWidth = () => {
  isScreenSmall.value = window.innerWidth <= 650
}

const imageMap = {
  'Anousheh-Ansari': Crew01Img,
  'Douglas-Hurley': Crew02Img,
  'Mark-Shuttleworth': Crew03Img,
  'Victor-Glover': Crew04Img,
}

const imageUrl = ref(Crew01Img)

const updateImage = () => {
  const urlParts = route.path.split('/')
  const lastPart = urlParts[urlParts.length -1]
  imageUrl.value = imageMap[lastPart]
}

watch(() => route.path, updateImage, { immediate: true })

const updateCrew = () => {
  const crewName = formatName(routeName.value)
  currentCrew.value = data.crew.find(crew => crew.name === crewName)
}

const formatName = (name) => {
  return name ? name.replace(/-/g, ' ') : ''
}

const routeName = computed(() => formatName(route.params.name))

watch(() => routeName.value, updateCrew)
onMounted(updateCrew)

const currentCrew = ref({
  name: "Anousheh Ansari",
  images: {
    png: "./assets/crew/image-anousheh-ansari.png",
    webp: "./assets/crew/image-anousheh-ansari.webp"
  },
  role: "Flight Engineer",
  bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
})

const data = {
  crew: [
    {
      "name": "Anousheh Ansari",
      "images": {
        "png": "./assets/crew/image-anousheh-ansari.png",
        "webp": "./assets/crew/image-anousheh-ansari.webp"
      },
      "role": "Flight Engineer",
      "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    },
    {
      "name": "Douglas Hurley",
      "images": {
        "png": "./assets/crew/image-douglas-hurley.png",
        "webp": "./assets/crew/image-douglas-hurley.webp"
      },
      "role": "Commander",
      "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
      "name": "Mark Shuttleworth",
      "images": {
        "png": "./assets/crew/image-mark-shuttleworth.png",
        "webp": "./assets/crew/image-mark-shuttleworth.webp"
      },
      "role": "Mission Specialist",
      "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
      "name": "Victor Glover",
      "images": {
        "png": "./assets/crew/image-victor-glover.png",
        "webp": "./assets/crew/image-victor-glover.webp"
      },
      "role": "Pilot",
      "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    }
  ]
}

</script>

<style scoped>

.crew-view {
  background-image: url('../assets/crew/background-crew-desktop.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 160px 0 35px 0;
  height: 100%;
}

.crew-meet-title {
  padding-left: 160px;
}

.crew-meet-title h2 {
  font-size: 28px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 4.725px;
}

.crew-meet-title span {
  opacity: 0.25;
  font-weight: 700;
}

.crew-row-container {
  align-items: flex-end;
  justify-content: center;
  margin: 0;
  padding: 0;
  height: 100%;
}

/* LEFT */
.crew-left-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 140px;
}

.crew-left-role {
  font-size: 32px;
  text-transform: uppercase;
  font-style: normal;
  line-height: normal;
  font-weight: 400;
  opacity: 0.505;
}

.crew-left-name {
  font-size: 56px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  margin-top: 15px;
  white-space: nowrap;
}

.crew-left-bio {
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  max-width: 450px;
  height: 170px;
}

.crew-nav-links {
  gap: 20px;
  margin-top: 30px;
}

.nav-links {
  background: #FFFFFF;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  opacity: 0.175;
}

.nav-links:hover {
  opacity: 0.5;
}

/* RIGHT */
.crew-right-container {
  display: flex;
  height: 100%;
}

.crew-right-img {
  align-self: flex-end;
  max-height: 600px;
}

/* ACTIVE */
.router-link-exact-active {
  opacity: 1;
}

/* MEDIAQUERY */
/* screen > 1450px */
@media only screen and (min-width: 1450px) {

}

/* screen > 2000px */
@media only screen  and (min-width: 2000px) {
  .crew-right-img {
    align-self: flex-end;
    max-height: 750px;
  }
}

@media only screen and (max-width: 1279px) {
  .crew-view {
    background-image: url('../assets/crew/background-crew-tablet.jpg');
    padding: 150px 0 35px 0;
  }

  .crew-meet-title {
    padding-left: 40px;
  }

  .crew-row-container {
    display: grid;
    justify-items: center;
    align-items: flex-end;
    width: 100vw;
    height: 100%;
    transform: scale(0.95);
  }

  .crew-left-container {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    margin: 50px auto 60px auto !important;
  }

  .crew-left-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 220px;
  }

  .crew-left-role {
    text-align: center;
  }

  .crew-left-bio {
    max-width: 100%;
    height: fit-content;
  }
}

@media only screen and (max-width: 650px) {
  .crew-view {
    background-image: url('../assets/crew/background-crew-mobile.jpg');
    padding: 0;
    height: 100%;
    overflow-y: hidden;
  }

  .crew-meet-title {
    padding: 110px 0 0 0;
    text-align: center;
    transform: scale(0.8);
  }

  .crew-row-container {
    align-content: flex-start;
    height: 40%;
    transform: scale(0.8);
  }

  .crew-left-container {
    display: grid !important;
    justify-items: center;
    margin: 0 auto 50px auto !important;
  }

  .crew-left-role {
    font-size: 20px;
  }

  .crew-left-name {
    font-size: 32px;
    margin: 15px;
  }

  .crew-left-bio {
    font-size: 16px;
    max-width: 100%;
    height: 100%;
  }

  .crew-right-container {
    display: flex;
    align-content: center;
    widows: 100vw;
  }

  .crew-right-img {
    object-fit: fill !important;
    border-bottom: 1px solid #383B4B;
  }

}
</style>
