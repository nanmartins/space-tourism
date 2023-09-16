<template>
  <div class="home-view">
    <v-row class="align-end justify-center ma-0 mb-10">

      <v-col cols="4" class="mb-10 pb-16 text-left">
        <h3 class="home-text-subtitle font-barlow-c text-uppercase text-details">So, you want to travel to</h3>
        <h1 class="home-text-title font-bellefair text-uppercase text-secondary">Space</h1>
        <p class="home-text-paragraph font-barlow text-details">Let’s face it; if you want to go to space, you might as well genuinely go to
        outer space and not hover kind of on the edge of it. Well sit back, and relax
        because we’ll give you a truly out of this world experience!</p>
      </v-col>

      <v-col cols="4" class="mb-12 pr-6 pb-16 text-right">
        <button class="home-explore-btn rounded-circle font-bellefair text-uppercase">Explore</button>
      </v-col>

    </v-row>
  </div>
</template>

<script setup>

</script>

<style scoped>
.home-view {
  display: flex;
  background-image: url('../assets/home/background-home-desktop.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
}

.home-text-subtitle {
  font-size: 28px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 4.725px;
  margin-bottom: 24px;
}

.home-text-title {
  font-size: 150px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 24px;
}

.home-text-paragraph {
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  max-width: 450px;
  word-wrap: break-word;
}

.home-explore-btn {
  font-size: 32px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2px;
  color: #0B0D17;
  background: #FFFFFF;
  height: 275px;
  width: 275px;
  position: relative;
}

.home-explore-btn::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  height: 450px;
  border-radius: 50%;
  background: #FFFFFF;
  opacity: 0;
  transition: opacity 0.3s;
}

.home-explore-btn:hover::before {
  opacity: 0.1036;
}
</style>
