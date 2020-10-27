<template>
  <v-row>
    <v-col v-for="user in users" :key="user.id">
      <v-card class="mx-auto" max-width="339">
        <!-- <v-img
          src="/avatar-box.svg"
          height="205px"
        ></v-img> -->
        <v-img
          :src="
            user.avatar
              ? `data:image/png;base64,${user.avatar}.png`
              : '/avatar.png'
          "
          height="200px"
        ></v-img>

        <!-- <v-img
          :src="data:image/jpg;base64,/user.avatar ? `/${user.avatar}.png` : '/avatar.png'"
          height="200px"
        ></v-img> -->

        <v-card-title>
          {{ user.username }}
          <v-card-subtitle> {{ user.birthday }} </v-card-subtitle>
        </v-card-title>

        <!-- TODO add city too -->
        <v-card-subtitle class="pb-0"> {{ user.country }} </v-card-subtitle>

        <v-card-actions>
          <!-- Modiefied -->
          <nuxt-link :to="'/profile/' + user.id"
            ><v-btn text>View Profile</v-btn></nuxt-link
          >
          <v-dialog v-model="msgDialog" persistent width="600px">
            <template v-slot:activator="{ msg, msgAttrs }">
              <v-btn
                @click="msgDialog = !msgDialog"
                color="primary"
                v-on="msg"
                v-bind="msgAttrs"
                text
              >
                Send Message
              </v-btn>
            </template>
            <v-card>
              <v-textarea
                v-model.trim="message"
                solo
                placeholder="Send Message"
                cols="25"
                rows="7"
              ></v-textarea>

              <v-card-actions>
                <v-btn class="d-block ml-auto" @click="msgDialog = false"
                  >Cancel</v-btn
                >
                <v-btn color="primary">Send</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    users: Array,
  },
  data: () => ({
    msgDialog: false,
    message: '',
  }),
}
</script>

<style lang="scss" scoped>
img {
  // object-fit: contain;
  width: 100% !important;
}
</style>
