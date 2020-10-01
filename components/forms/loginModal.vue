<template>
  <v-dialog v-model="loginModal" persistent max-width="600px">
    <template v-slot:activator="{ login, loginAttrs }">
      <v-btn
        @click="loginModal = !loginModal"
        v-bind="loginAttrs"
        v-on="login"
        large
        outlined
        color="primary"
        >Login</v-btn
      >
    </template>
    <v-card>
      <v-card-title>
        <h3>Login</h3>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-form @submit.prevent="validate" ref="form">
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="userInfo.email"
                  label="Email"
                  type="email"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="userInfo.password"
                  label="Password"
                  :type="showPassword ? 'text' : 'password'"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                  required
                ></v-text-field>
              </v-col>
              <v-col>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn @click="loginModal = false">Cancel</v-btn>
                  <v-btn class="white--text" type="submit" color="primary"
                    >Login</v-btn
                  >
                </v-card-actions>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    userInfo: {
      email: '',
      password: '',
    },
    loginModal: false,
    showPassword: false,
  }),
  methods: {
    async validate() {
      try {
        await this.$store.dispatch('auth/login', this.userInfo)
      } catch (error) {
        res.status(400).send(error)
      }
    },
  },
}
</script>
