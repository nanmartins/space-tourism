<template>
  <div class="technology-view">

    <h2 class="tech-left-device-name font-barlow-c text-uppercase"><span class="font-barlow-c pr-2">03</span> Space launch 101</h2>

    <!-- <div> -->
    <v-row class="tech-main-div pt-2">

      <v-col cols="auto" class="pa-0">
        <div class="d-flex pt-4">

          <div cols="2" class="tech-nav-links d-flex flex-column font-bellefair">
            <router-link to="/technology/Launch-vehicle" class="nav-links d-flex justify-center align-center">1</router-link>
            <router-link to="/technology/Spaceport" class="nav-links d-flex justify-center align-center">2</router-link>
            <router-link to="/technology/Space-capsule" class="nav-links d-flex justify-center align-center">3</router-link>
          </div>

          <div class="tech-left-techinfo-div">
            <v-col cols="auto" class="tech-left-techinfo pa-0">
              <h3 class="tech-left-terminology font-barlow-c">the terminology...</h3>
              <h1 class="tech-left-techname font-bellefair text-uppercase">{{ currentTechnology.name }}</h1>
              <p class="tech-left-techdesc font-barlow">{{ currentTechnology.description }}</p>
            </v-col>
          </div>

          <v-col cols="auto" class="tech-rigth-img-container text-left pt-6 pr-0">
            <v-img :src="imageUrl" class="tech-right-img"></v-img>
          </v-col>
        </div>
      </v-col>

    </v-row>

    <!-- </div> -->

  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import LaunchVehicle from '@/assets/technology/launch-vehicle.jpg'
import SpaceCapsule from '@/assets/technology/space-capsule.jpg'
import SpacePort from '@/assets/technology/spaceport.jpg'

const route = useRoute()

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

const imageUrl = ref(LaunchVehicle)

const updateImage = () => {
  const urlParts = route.path.split('/')
  const lastPart = urlParts[urlParts.length -1]
  imageUrl.value = imageMap[lastPart]
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
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.tech-left-device-name {
  padding-top: 165px;
  padding-left: 165px
}

.tech-main-div {
  justify-content: end;
  margin-left: 165px;
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
  margin: auto 80px auto 0;
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
  margin: auto;
}

.tech-left-techinfo {
  max-width: 480px;
  margin: auto 160px auto 0;
}

.tech-left-terminology {
  text-transform: uppercase;
  color: #D0D6F9;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2.7px;
  /* padding-top: 15px; */
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
  margin-bottom: 20px;
}


/* RIGHT */
.tech-right-img {
  width: 470px;
}


/* MEDIAQUERY */
/* screen width > 1450px */
@media only screen and (min-width: 1450px) {

  .tech-main-div {
    justify-content: center;
    margin-left: 165px;
    margin-top: 0px;
  }

  .tech-right-img {
    width: 520px;
  }

}

/* screen width > 2000px */
@media only screen  and (min-width: 2000px) {

  .tech-right-img {
    width: 650px;
  }

  .tech-left-device-name {
    padding-top: 200px;
    padding-left: 20vw;
  }

}

/* JUST HEIGHT */
/* screen height > 950px */
@media only screen and (min-height: 950px) {

  .tech-main-div {
    margin-top: 70px;
  }
}

</style>
