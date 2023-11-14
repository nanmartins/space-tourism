<template>
  <div class="home-view">
    <v-row class="home-view-row align-center justify-center ma-0">

      <v-col cols="4" xl="3" class="home-left-intro">
        <h3 class="home-text-subtitle font-barlow-c text-uppercase text-details">So, you want to travel to</h3>
        <h1 class="home-text-title font-bellefair text-uppercase text-secondary">Space</h1>
        <p class="home-text-paragraph font-barlow text-details">Let’s face it; if you want to go to space, you might as well genuinely go to
        outer space and not hover kind of on the edge of it. Well sit back, and relax
        because we’ll give you a truly out of this world experience!</p>
      </v-col>

      <v-col cols="4" xl="3" class="home-right-btn-col pa-0 text-right">
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
  /* min-height: 1000px; */
  padding: 16% 0 50px 0;
  flex-shrink: 0;
  height: 100%;
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


/* MEDIAQUERY */
@media only screen and (max-width: 1380px) {

  .home-view {
    background-image: url('../assets/home/background-home-tablet.jpg');
    max-height: 140%;
    height: 100%;
    padding: 0 0 100px 0;
  }

  .home-view-row {
    display: grid;
    align-content: space-around;
    width: 100vw;
    height: 100%;
    padding: 170px 0 0 0 !important;
    margin: 0 !important;
    justify-items: center;
    text-align: center;
  }

  .home-left-intro {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    margin: 0 auto;
    padding: 0;
  }

  .home-text-title {
    margin: 0;
    padding: 0;
    line-height: 130px;
    display: flex;
    justify-content: center;
  }

  .home-text-paragraph {
    margin: 0 auto;
  }


  /* //////////////////////// */

  .home-right-btn-col {
    display: flex;
    width: 100vw;
    margin-top: 100px;
    padding: 50px 0 100px 0;
    /* padding-bottom: 100px; */
    justify-content: center;
  }

  .home-explore-btn {
    padding: 0;
    margin: 0;
    height: 230px;
    width: 230px;
  }

  .home-explore-btn::before {
    width: 360px;
    height: 360px;
  }
}
</style>
