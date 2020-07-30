<template>
  <v-container>
    <div id="profile-img-wrapper">
      <img class="d-block mx-auto" src="/icon.png" alt="profile-img" />
    </div>
    <v-list class="mt-5" three-line subheader>
      <v-subheader>Account Details</v-subheader>
      <v-card
        ><v-list-item>
          <v-list-item-content>
            <v-list-item-title>My self-summary</v-list-item-title>
            <v-list-item-subtitle
              >Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem esse, blanditiis tempore alias aut at quis saepe,
              consequatur dolor fuga sequi natus.</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title
              >I spend a lot of time thinking about</v-list-item-title
            >
            <v-list-item-subtitle>Futre for example</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item></v-card
      >
    </v-list>
  </v-container>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#profile-img-wrapper {
  background: $lightOrange;
  border-radius: 5px;
  height: 250px;
  img {
    height: 225px;
    width: 225px;
    position: relative;
    top: 25%;
  }
}
</style>
