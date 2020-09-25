<template>
  <v-dialog v-model="signupModal" persistent max-width="750px">
    <template v-slot:activator="{ signup, signupAttrs }">
      <v-btn
        @click="signupModal = !signupModal"
        v-bind="signupAttrs"
        v-on="signup"
        large
        color="primary"
        >Sign up</v-btn
      >
    </template>
    <v-card>
      <v-card-title>
        <h3>Create Account</h3>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-form @submit.prevent="validate" ref="form">
            <v-row
              ><v-col cols="6">
                <v-text-field
                  v-model="userInfo.username"
                  label="Username"
                  required
                  :rules="validation.username"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="userInfo.email"
                  label="Email"
                  required
                  :rules="validation.email"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="userInfo.password"
                  label="Password"
                  :type="showPassword ? 'text' : 'password'"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                  :counter="10"
                  required
                  :rules="validation.password"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="userInfo.confirmPassword"
                  label="Confirm Password"
                  :type="showConfirmPassword ? 'text' : 'password'"
                  :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showConfirmPassword = !showConfirmPassword"
                  :counter="10"
                  required
                  :rules="validation.confirmPassword"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <!-- Birthday component -->
              </v-col>
              <v-col cols="6"
                ><v-autocomplete
                  ref="country"
                  v-model="userInfo.country"
                  :items="countries"
                  label="Country"
                  placeholder="Select..."
                  required
                ></v-autocomplete>
              </v-col>
              <v-col>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn @click="signupModal = false">Cancel</v-btn>
                  <v-btn class="white--text" color="primary" type="submit"
                    >Create Account</v-btn
                  >
                </v-card-actions>
              </v-col>
            </v-row></v-form
          >
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    userInfo: {
      username: null,
      email: null,
      password: null,
      confirmPassword: null,
      country: null,
    },
    showPassword: false,
    showConfirmPassword: false,
    countries: ['Morocco', 'United Kingdom'],
    signupModal: false,
    validation: {
      username: [
        (v) => !!v || 'Username is required',
        (v) =>
          (v && v.length <= 11) || 'Username must be less than 11 characters',
      ],
      email: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      password: [
        (v) => !!v || 'Password is required',
        (v) =>
          (v && v.length <= 13) || 'Subject must be less than 13 characters',
      ],
      confirmPassword: [
        (v) => !!v || 'Password confirmation is required',
        (v) =>
          (v && v.length <= 13) || 'Password must be less than 13 characters',
        // (v) => v !== this.password || 'no match'
      ],
    },
  }),
  methods: {
    async validate() {
      try {
        await this.$store.dispatch('register', this.userInfo)
      } catch (error) {
        res.status(400).send(error)
      }
    },
    submitForm() {},
  },
}
</script>
