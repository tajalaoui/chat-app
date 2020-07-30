<template>
  <v-container>
    <v-list three-line subheader>
      <v-subheader>Account</v-subheader>
      <v-card
        ><v-list-item>
          <v-list-item-content>
            <v-list-item-title>Change Username</v-list-item-title>
            <v-list-item-subtitle
              >Set the content filtering level to restrict apps that can be
              downloaded</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Change Password</v-list-item-title>
            <v-list-item-subtitle
              >Require password for purchase or use password to restrict
              purchase</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item></v-card
      >
    </v-list>
    <v-subheader>Theme</v-subheader>
    <v-card
      ><v-list-item>
        <v-list-item-content>
          <v-list-item-title>Dark Theme</v-list-item-title>
          <v-switch @change="checkDarkMode" v-model="isDark"></v-switch>
        </v-list-item-content> </v-list-item
    ></v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    isDark: null,
  }),
  computed: {
    checkDarkMode() {
      if (this.isDark) {
        this.$vuetify.theme.dark = true
      } else {
        this.$vuetify.theme.dark = false
      }
    },
  },
}
</script>

<style></style>
