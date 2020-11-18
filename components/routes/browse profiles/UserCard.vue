<template>
  <v-row>
    <v-col v-for="user in users" :key="user.id">
      <v-card class="mx-auto" max-width="339">
        <!-- <v-img
          src="/avatar-box.svg"
          height="205px"
        ></v-img> -->
        <v-img
          :src="
            user.avatar
              ? `data:image/png;base64,${user.avatar}.png`
              : '/avatar.png'
          "
          height="200px"
        ></v-img>

        <!-- <v-img
          :src="data:image/jpg;base64,/user.avatar ? `/${user.avatar}.png` : '/avatar.png'"
          height="200px"
        ></v-img> -->

        <v-card-title>
          {{ user.username }}
          <v-card-subtitle> {{ user.birthday }} </v-card-subtitle>
        </v-card-title>

        <!-- TODO add city too -->
        <v-card-subtitle class="pb-0"> {{ user.country }} </v-card-subtitle>

        <v-card-actions>
          <!-- Modiefied -->
          <nuxt-link :to="`/profile/${user._id}`"
            ><v-btn text>View Profile</v-btn> {{ user.id }}</nuxt-link
          >
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    users: Array,
  },
}
</script>

<style lang="scss" scoped>
img {
  // object-fit: contain;
  width: 100% !important;
}
</style>
