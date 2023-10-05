<template>
  <div class="technology-view">
    <!-- <h3 class="in-progress d-flex align-center justify-center h-100 font-barlow-c text-uppercase text-details">in progress...</h3> -->
    <h2 class="tech-left-device-name font-barlow-c text-uppercase" style="padding-top: 170px; padding-left: 165px"><span class="font-barlow-c pr-2">03</span> Space launch 101</h2>

    <v-row class="justify-end pt-10">

      <v-col cols="auto" class="pa-0 pr-16 pt-10">
        <div class="d-flex justify-start pt-10">
          <div cols="3" class="tech-nav-links d-flex flex-column font-bellefair">
            <router-link to="/technology" class="nav-links d-flex justify-center align-center">1</router-link>
            <router-link to="/technology" class="nav-links d-flex justify-center align-center">2</router-link>
            <router-link to="/technology" class="nav-links d-flex justify-center align-center">3</router-link>
          </div>

          <v-col cols="auto">
            <h3>the terminology...</h3>
            <h1>Launch Vehicle</h1>
          </v-col>
        </div>
      </v-col>

      <v-col cols="auto" class="text-left" style="padding-top: 30px">
        <v-img :src="imageUrl" width="460px"></v-img>
      </v-col>

    </v-row>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import LaunchVehicle from '@/assets/technology/launch-vehicle.jpg'
import SpaceCapsule from '@/assets/technology/space-capsule.jpg'
import SpacePort from '@/assets/technology/spaceport.jpg'

const route = useRoute()

const imageMap = {
  'Launch-vehicle': LaunchVehicle,
  'Spaceport': SpacePort,
  'Space-capsule': SpaceCapsule,
}

const imageUrl = ref(LaunchVehicle)

const currentTechnology = ref({
  name: "Launch vehicle",
    images: {
      portrait: "./assets/technology/image-launch-vehicle-portrait.jpg",
      landscape: "./assets/technology/image-launch-vehicle-landscape.jpg"
    },
    description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
})


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



/* .tech-nav-links {
  display: flex;
  align-self: center;
} */

.nav-links {
  height: 80px;
  width: 80px;
  color: #FFFFFF;
  border-radius: 50%;
  border: 1px solid #FFFFFF;
  font-size: 32px;
  text-decoration: none;
  margin: 22px 80px 32px 0 ;
  /* background: white; */
}

.in-progress {
  letter-spacing: 2.7px;
}




/* ///////////////////////////////////// */
.testando {
  height: 100vh;
  align-items: center;
  justify-content: center;
}
</style>
