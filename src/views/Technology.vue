<template>
  <div class="technology-view">

    <div class="tech-device-title">
      <h2 class="tech-left-device-name font-barlow-c text-uppercase"><span class="font-barlow-c pr-2">03</span> Space launch 101</h2>
    </div>

    <v-row class="tech-main-div">

      <v-col cols="12" lg="6" xl="5" class="tech-left-techinfo-div">

        <v-col cols="auto" class="tech-nav-links d-flex font-bellefair">
          <router-link to="/technology/Launch-vehicle" class="nav-links d-flex justify-center align-center">1</router-link>
          <router-link to="/technology/Spaceport" class="nav-links d-flex justify-center align-center">2</router-link>
          <router-link to="/technology/Space-capsule" class="nav-links d-flex justify-center align-center">3</router-link>
        </v-col>


        <v-col cols="auto" class="tech-left-techinfo">
          <h3 class="tech-left-terminology font-barlow-c">the terminology...</h3>
          <h1 class="tech-left-techname font-bellefair text-uppercase">{{ currentTechnology.name }}</h1>
          <p class="tech-left-techdesc font-barlow">{{ currentTechnology.description }}</p>
        </v-col>

      </v-col>

      <v-col cols="12" lg="4" xl="5" class="tech-rigth-img-container">
        <!-- <v-img :src="imageUrl" class="tech-right-img"></v-img> -->
        <img :src="imageUrl" class="tech-right-img" alt="">
      </v-col>

    </v-row>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import LaunchVehicle from '@/assets/technology/launch-vehicle.jpg'
import LaunchVehicleLandscape from '@/assets/technology/launch-vehicle-landscape.jpg'
import SpaceCapsule from '@/assets/technology/space-capsule.jpg'
import SpaceCapsuleLandscape from '@/assets/technology/space-capsule-landscape.jpg'
import SpacePort from '@/assets/technology/spaceport.jpg'
import SpacePortLandscape from '@/assets/technology/spaceport-landscape.jpg'


const route = useRoute()
const windowWidth = ref(window.innerWidth)

const handleResize = () => {
  windowWidth.value = window.innerWidth
  updateImage()
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
  updateImage()
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

watch(windowWidth, () => {
  updateImage()
})

const currentTechnology = ref({
  name: "Launch vehicle",
    images: {
      portrait: "./assets/technology/image-launch-vehicle-portrait.jpg",
      landscape: "./assets/technology/image-launch-vehicle-landscape.jpg"
    },
  description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
})

const imageMap = {
  'Launch-vehicle': LaunchVehicle,
  'Spaceport': SpacePort,
  'Space-capsule': SpaceCapsule,
}

const smallImgMap = {
  'Launch-vehicle': LaunchVehicleLandscape,
  'Spaceport': SpacePortLandscape,
  'Space-capsule': SpaceCapsuleLandscape,
}

const imageUrl = ref(LaunchVehicle)

// const imageUrl = ref(() => {
//   if (windowWidth.value < 1280) {
//     return LaunchVehicleLandscape
//   } else {
//     return LaunchVehicle
//   }
// })

const updateImage = () => {
  const urlParts = route.path.split('/')
  const lastPart = urlParts[urlParts.length -1]

  if (windowWidth.value < 1280) {
    imageUrl.value = smallImgMap[lastPart] || LaunchVehicleLandscape
  } else {
    imageUrl.value = imageMap[lastPart] || LaunchVehicle
  }
}

watch(() => route.path, updateImage, { immediate: true })

const updateTech = () => {
  const techName = formatName(routeName.value)
  currentTechnology.value = data.technology.find(tech => tech.name === techName)
}

const formatName = (name) => {
  return name ? name.replace(/-/g, ' ') : ''
}

const routeName = computed(() => formatName(route.params.name))

watch(() => routeName.value, updateTech)
onMounted(updateTech)

const data =  {
  technology: [
    {
      "name": "Launch vehicle",
      "images": {
        "portrait": "./assets/technology/image-launch-vehicle-portrait.jpg",
        "landscape": "./assets/technology/image-launch-vehicle-landscape.jpg"
      },
      "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
      "name": "Spaceport",
      "images": {
        "portrait": "./assets/technology/image-spaceport-portrait.jpg",
        "landscape": "./assets/technology/image-spaceport-landscape.jpg"
      },
      "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
      "name": "Space capsule",
      "images": {
        "portrait": "./assets/technology/image-space-capsule-portrait.jpg",
        "landscape": "./assets/technology/image-space-capsule-landscape.jpg"
      },
      "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
  ]
}
</script>


<style scoped>
.technology-view {
  background-image: url('../assets/technology/background-technology-desktop.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 160px 0 0 0;
  flex-shrink: 0;
  height: 100%;
  overflow: hidden;
}

.tech-device-title {
  padding-left: 160px;
}

.tech-main-div {
  /* margin-top: 5vh; */
  height: 100%;
  justify-content: center;
  align-items: center;
}

/* LEFT */
.tech-left-device-name {
  font-size: 28px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 4.725px;
}

.tech-left-device-name span {
  font-weight: 700;
  opacity: 0.25;
}

.tech-nav-links {
  flex-direction: column;
  margin: auto 30px auto 0;
}

.nav-links {
  height: 80px;
  width: 80px;
  color: #FFFFFF;
  border-radius: 50%;
  border: 1px solid #ffffff49;
  font-size: 32px;
  text-decoration: none;
  margin-bottom: 35px;
}

.nav-links:hover {
  border: 1px solid #FFFFFF;
}

.router-link-exact-active {
  background: #FFFFFF;
  color: #0B0D17;
}

.tech-left-techinfo-div {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
}

.tech-left-techinfo {
  flex: 1;
  max-width: 600px;
  padding: 0 20px 0 0;
  margin-bottom: 20px;
}

.tech-left-terminology {
  text-transform: uppercase;
  color: #D0D6F9;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2.7px;
}

.tech-left-techname {
  font-size: 56px;
  font-weight: 400;
  line-height: normal;
  padding: 20px 0;
}

.tech-left-techdesc {
  color: #D0D6F9;
  font-size: 18px;
  font-weight: 400;
  line-height: 34px;
}

/* RIGHT */
.tech-rigth-img-container {
  padding: 0;
}

.tech-right-img {
  padding: 0;
  width: 100%;
}

@media only screen and (max-width: 1279px) {

  .technology-view {
    background-image: url('../assets/technology/background-technology-tablet.jpg');
    padding: 150px 0 0 0;
  }

  .tech-device-title {
    padding-left: 40px;
  }

  .tech-main-div {
    display: flex;
    height: auto;
    flex-direction: column-reverse;
    align-items: center;
    margin-top: 60px;
    justify-content: end;
  }

  .tech-left-techinfo-div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    flex-direction: column;
  }

  .tech-left-techinfo {
    flex: 1;
    text-align: center;
    max-width: 520px;
    padding: 0;
    margin-bottom: 70px;
  }

  .tech-nav-links {
    flex-direction: row;
    align-items: center;
    gap: 16px;
    margin: 45px auto 40px auto;
  }

  .nav-links {
    height: 60px;
    width: 60px;
    margin-bottom: 0;
    padding: 0;
  }

  .tech-rigth-img-container {
    width: 100vw;
    min-height: 300px;
  }

  .tech-right-img {
    width: 100vw;
    height: 100%;
  }
}

@media only screen and (max-width: 650px) {

  .technology-view {
    background-image: url('../assets/technology/background-technology-mobile.jpg');
    padding: 100px 0 00;
  }

  .tech-device-title {
    padding-left: 0;
    text-align: center;
    transform: scale(0.8);
  }

  .tech-main-div {
    margin-top: 40px;
    justify-content: center;
  }

  .tech-nav-links {
    margin: 35px auto 10px auto;
  }

  .nav-links {
    height: 60px;
    width: 60px;
    margin-bottom: 0;
    padding: 0;
  }

  .tech-left-techinfo {
    transform: scale(0.8);
  }

  .tech-left-techname {
    font-size: 48px;
    font-weight: 400;
    line-height: normal;
    padding: 20px 0;
  }

  .tech-rigth-img-container {
    min-height: 150px;
  }

  .tech-rigth-img {
    width: 100%;
    max-height: calc(100vh - 200px);
  }

}


</style>
