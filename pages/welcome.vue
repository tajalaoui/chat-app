<template>
  <v-container>
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
        ><img src="/pages/home.svg" alt="chatting"
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
@media (max-width: 1090px) {
  img {
    width: 450px;
    height: 450px;
  }
}

@media (max-width: 953px) {
  * {
    flex-direction: column;
    margin: 0 auto;
  }
}
</style>
