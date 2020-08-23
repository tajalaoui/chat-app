<template>
  <v-form>
    <v-row>
      <v-col class="ml-7" cols="10" md5>
        <v-text-field
          :value="profileInfo.username"
          label="Username"
          type="text"
        ></v-text-field>
        <v-text-field
          :value="profileInfo.email"
          label="Email"
          type="email"
        ></v-text-field>
        <h4>Security</h4>
        <v-text-field
          :value="profileInfo.password"
          label="Password"
          type="password"
        ></v-text-field>

        <v-switch @change="checkDarkMode" v-model="isDark" label="Dark Theme"></v-switch>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
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
