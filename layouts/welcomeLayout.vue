<template>
  <v-app>
    <v-app-bar color="transparent" flat app role="toolbar">
      <v-container
        ><v-toolbar-title class="text-uppercase">
          <nuxt-link class="brand-name" to="/">Taj-Chat</nuxt-link>
        </v-toolbar-title></v-container
      >
    </v-app-bar>
    <v-main><nuxt /></v-main>
    <LazyVfooter />
  </v-app>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.v-main {
  // background: $lightOrange;
}

.brand-name {
  color: $primaryColor !important;
}
</style>
