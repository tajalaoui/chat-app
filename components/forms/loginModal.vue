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
          <v-row>
            <v-col cols="12">
              <v-text-field
                color="#ff7043"
                label="Email"
                type="email"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Password"
                type="password"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="white--text" color="red" @click="loginModal = false"
          >Cancel</v-btn
        >
        <v-btn color="primary" @click="loginModal = false">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    loginModal: false,
  }),
}
</script>
