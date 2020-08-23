<template>
  <v-container>
    <v-card color="primary" id="profile-img-wrapper">
      <img class="" src="/profile-icon.png" alt="profile-img" />
    </v-card>
    <v-row>
      <v-col cols="12" class="account-header">
        <h1 id="username">Tajeddine</h1>
        <v-subheader style="height: 13px;" id="age-location"
          >23, Marrakech</v-subheader
        >
      </v-col>
    </v-row>
    <section>
      <LazyProfileCards />
    </section>
  </v-container>
</template>

<style lang="scss" scoped>
#profile-img-wrapper {
  border-radius: 5px;
  height: 250px;

  img {
    height: 225px;
    width: 225px;
    position: relative;
    top: 25%;
    margin: 0 auto;
  }
}

img,
#username,
#age-location {
  display: flex;
  justify-content: center;
}

.account-header {
  margin-top: 1.5%;
}

@media (max-width: 960px) {
  .account-header {
    margin-top: 6.1%;
  }
}
</style>
