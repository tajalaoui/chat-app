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
          <v-form @submit.prevent="validate" v-model="valid" ref="form">
            <v-row
              ><v-col cols="6">
                <v-text-field
                  v-model="userInfo.username"
                  label="Username"
                  counter="11"
                  :rules="rules.username"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="userInfo.email"
                  type="email"
                  label="Email"
                  :rules="rules.email"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="userInfo.password"
                  label="Password"
                  :type="showPassword ? 'text' : 'password'"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                  counter="13"
                  :rules="rules.password"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="userInfo.confirmPassword"
                  label="Confirm Password"
                  :type="showConfirmPassword ? 'text' : 'password'"
                  :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showConfirmPassword = !showConfirmPassword"
                  counter="13"
                  :rules="rules.confirmPassword"
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
                  :rules="rules.country"
                ></v-autocomplete>
              </v-col>
              <v-col>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn @click="signupModal = false">Cancel</v-btn>
                  <v-btn
                    class="white--text"
                    color="primary"
                    type="submit"
                    :disabled="!valid"
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
    countries: ['Morocco', 'United Kingdom'],
    showPassword: false,
    showConfirmPassword: false,
    signupModal: false,
    valid: false,
    rules: {
      username: [
        (v) => !!v || 'Username is required',
        (v) => (v && v.length <= 11) || 'Name must be less than 11 characters',
        (v) => (v && v.length >= 5) || 'Name must be more than 5+ characters',
      ],
      email: [
        (v) => !!v || 'Email is required',
        (v) => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      password: [
        (v) => !!v || 'Password is required',
        (v) => (v && v.length >= 5) || 'Password must have 5+ characters',
        (v) => /(?=.*[A-Z])/.test(v) || 'Must have one uppercase character',
        (v) => /(?=.*\d)/.test(v) || 'Must have one number',
      ],
      confirmPassword: [
        (v) => !!v || 'Password confirmation is required',
        // (v) => v != userInfo.confirmPassword || 'Password must match',
      ],
      country: [(v) => !!v || 'Selection of country is required'],
    },
  }),

  methods: {
    validate() {
      this.submitForm()
    },
    async submitForm() {
      try {
        await this.$store.dispatch('auth/register', this.userInfo)
      } catch (error) {
        res.status(400).send(error)
      }
    },
  },
}
</script>
