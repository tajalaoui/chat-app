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
          <v-form @submit.prevent="submitForm" v-model="valid" ref="form">
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
                  counter="17"
                  :rules="rules.password"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-select
                  v-model="userInfo.gender"
                  :items="gender"
                  label="Gender"
                ></v-select>
              </v-col>

              <!-- Birthday -->
              <v-col cols="6">
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="userInfo.birthday"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="userInfo.birthday"
                      label="Birthday date"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    ref="picker"
                    v-model="userInfo.birthday"
                    format="YYYY-MM-dd"
                    min="1950-01-01"
                    max="2003-01-01"
                  >
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.menu.save(userInfo.birthday)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
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
      gender: null,
      birthday: null,
      country: null,
    },
    gender: ['Male', 'Female'],
    countries: ['Morocco', 'United Kingdom'],
    showPassword: false,
    signupModal: false,
    valid: false,
    menu: false,
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
      country: [(v) => !!v || 'Selection of country is required'],
    },
  }),
  methods: {
    async submitForm() {
      try {
        this.$nuxt.$loading.start()

        await this.$store.dispatch('auth/register', this.userInfo)

        this.$nuxt.$loading.finish()
      } catch (error) {
        res.status(400).send(error)
      }
    },
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
    },
  },
  // maxDate() {
  //   const date = new Date()
  //   date.setFullYear(date.getFullYear() - 18)
  //   return date.toISOString().substr(0, 10)
  // },
}
</script>
