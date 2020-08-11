<template>
  <v-container >
    <v-row class="align-center">
      <v-col cols="12" md="6"
        ><h1>Looking for online friends ?</h1>
        <h4>Say no more</h4>
        <div class="mt-3">
          <LazySignupModal />
          <LazyLoginModal />
        </div>
      </v-col>
      <v-col cols="12" md="6"
        ><img src="/pages/home.svg" alt="chatting-img"
      /></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'welcomeLayout',
  data: () => ({}),
}
</script>

<style lang="scss" scoped>
img {
  display: block;
  height: 720px;
  width: 720px;
}

@media (max-width: 1150px) {
  img {
    width: 565px;
    height: 565px;
  }
}

@media (max-width: 600px) {
  img {
    width: 383px;
    height: 383px;
  }
}

@media (max-width: 400px) {
  img {
    width: 280px;
    height: 280px;
  }
}

@media (max-width: 953px) {
  * {
    flex-direction: column !important;
    margin: 0 auto !important;
  }
}
</style>
