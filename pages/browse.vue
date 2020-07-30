<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="4"
        ><v-card class="mx-auto" max-width="355">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
          ></v-img>

          <v-card-title>
            John Doe
          </v-card-title>

          <v-card-subtitle>
            Morocco, Marrakech
          </v-card-subtitle>

          <v-card-text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aperiam atque iusto, facilis, sequi animi voluptatem ut sunt vero laboriosam laudantium.</v-card-text>

          <v-card-actions>
            <v-btn text>View Profile</v-btn>

            <v-btn color="orange" text>
              Send Message
            </v-btn>
          </v-card-actions>
        </v-card></v-col
      >
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    show: false,
  }),
}
</script>

<style></style>
