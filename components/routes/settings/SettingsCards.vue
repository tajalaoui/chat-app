<template>
  <v-form>
    <v-row>
      <v-col class="ml-7" cols="10" md5>
        <v-text-field
          :value="settings.username"
          label="Username"
          type="text"
        ></v-text-field>
        <v-text-field
          :value="settings.email"
          label="Email"
          type="email"
        ></v-text-field>

        <v-text-field
          :value="settings.password"
          label="Password"
          type="password"
        ></v-text-field>

        <v-switch
          @change="checkDarkMode"
          v-model="isDark"
          label="Dark Theme"
        ></v-switch>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  props: {
    settings: Object,
  },
  data: () => ({
    isEdit: false,
    isDark: null,
    profileInfo: {
      username: 'Tajeddine',
      email: 'tajeddine-dev@hotmail.com',
      password: 'tajeddine',
    },
  }),
  methods: {
    editBehavior(index) {
      this.isEdit = true
    },
  },
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

<style lang="scss" scoped>
input:hover {
  cursor: pointer;
}

.save-edit {
  // width: 100px;
  display: block;
  margin-left: auto;
}
</style>
