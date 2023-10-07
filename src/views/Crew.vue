<template>
  <div class="crew-view">
    <v-row class="align-center justify-center pa-0 ma-0" style="height: 100%; align-items: flex-end;">

      <v-col cols="6" xl="5" class="crew-left-container justify-start pa-0 pl-16">
        <div class="crew-left-div pl-sm-10">
          <h2 class="crew-left-meet font-barlow-c text-uppercase"><span class="font-barlow-c pr-2">02</span> Meet  your crew</h2>
          <h2 class="crew-left-role font-bellefair">{{ currentCrew.role }}</h2>
          <h1 class="crew-left-name font-bellefair">{{ currentCrew.name }}</h1>

          <p class="crew-left-bio font-barlow text-details">{{ currentCrew.bio }}</p>

          <div class="d-flex crew-nav-links">
            <router-link to="/crew/Anousheh-Ansari" class="nav-links"></router-link>
            <router-link to="/crew/Douglas-Hurley" class="nav-links"></router-link>
            <router-link to="/crew/Mark-Shuttleworth" class="nav-links"></router-link>
            <router-link to="/crew/Victor-Glover" class="nav-links"></router-link>
          </div>
        </div>

      </v-col>

      <v-col cols="5" xl="4" class="crew-right-container pa-0">
        <v-img :src="imageUrl" class="crew-right-img"></v-img>
      </v-col>

    </v-row>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import Crew01Img from '@/assets/crew/image-anousheh-ansari.png'
import Crew02Img from '@/assets/crew/image-douglas-hurley.png'
import Crew03Img from '@/assets/crew/image-mark-shuttleworth.png'
import Crew04Img from '@/assets/crew/image-victor-glover.png'

const route = useRoute()

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
  height: 100vh;
}

/* LEFT */
.crew-left-container {
  display: flex;
  height: 80%;
  width: 600px;
}

.crew-left-div {
  align-self: flex-end;
}

.crew-left-container .crew-left-meet {
  font-size: 28px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 4.725px;
  margin-top: 120px;
}

.crew-left-container span {
  opacity: 0.25;
  font-weight: 700;
}

.crew-left-role {
  font-size: 32px;
  text-transform: uppercase;
  font-style: normal;
  line-height: normal;
  font-weight: 400;
  opacity: 0.505;
  margin-top: 150px;
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
  max-height: 580px;
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
</style>
