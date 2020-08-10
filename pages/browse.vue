<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="4"
        ><v-card class="mx-auto" max-width="335">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
          ></v-img>

          <v-card-title>
            John Doe
          </v-card-title>

          <v-card-subtitle class="pb-0">
            Morocco, Marrakech
          </v-card-subtitle>

          <v-card-actions>
            <v-btn text>View Profile</v-btn>
            <v-dialog v-model="msgDialog" persistent width="600px">
              <template v-slot:activator="{ msg, msgAttrs }">
                <v-btn
                  @click="msgDialog = !msgDialog"
                  color="success"
                  v-on="msg"
                  v-bind="msgAttrs"
                  text
                >
                  Send Message
                </v-btn>
              </template>
              <v-textarea
                v-model.trim="message"
                solo
                placeholder="Send Message"
                cols="30"
                rows="10"
              ></v-textarea>
              <v-row
                ><v-col>
                  <v-btn @click="msgDialog = false" color="red">Cancel</v-btn>
                  <v-btn color="success">Send</v-btn></v-col
                ></v-row
              >
            </v-dialog>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    msgDialog: false,
    message: '',
  }),
}
</script>

<style lang="scss" scoped></style>
