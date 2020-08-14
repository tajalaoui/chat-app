<template>
  <v-app>
    <v-app-bar elevation="3" color="primary" flat app role="toolbar">
      <v-container
        ><v-toolbar-title class="text-uppercase">
          <nuxt-link class="brand-name" to="/"><h2>Taj-Chat</h2></nuxt-link>
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