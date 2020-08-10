<template>
  <v-dialog v-model="signupModal" persistent max-width="750px">
    <template v-slot:activator="{ signup, signupAttrs }">
      <v-btn
        @click="signupModal = !signupModal"
        v-bind="signupAttrs"
        v-on="signup"
        large
        color="success"
        >Sign up</v-btn
      >
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Create Account</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="6">
              <v-text-field label="First name" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field label="Last name" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Email" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Password"
                type="password"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="Birthday date"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  ref="picker"
                  v-model="date"
                  :max="new Date().toISOString().substr(0, 10)"
                  min="1950-01-01"
                  @change="save"
                ></v-date-picker>
                <v-autocomplete
                  ref="country"
                  v-model="country"
                  :items="countries"
                  label="Country"
                  placeholder="Select..."
                  required
                ></v-autocomplete>
              </v-menu>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="white--text" color="red" @click="signupModal = false"
          >Cancel</v-btn
        >
        <v-btn color="success" @click="signupModal = false"
          >Create Account</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    countries: ['Afghanistan', 'Albania'],
    country: null,
    signupModal: false,
    date: null,
    menu: false,
  }),
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
    },
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date)
    },
  },
  computed: {
    form() {
      return {
        // name: this.name,
        // address: this.address,
        // city: this.city,
        // state: this.state,
        // zip: this.zip,
        country: this.country,
      }
    },
  },
}
</script>
