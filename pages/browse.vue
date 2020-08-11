<template>
  <v-container>
    <v-dialog v-model="filterProfiles" persistent max-width="600px">
      <template v-slot:activator="{ filter, filterAttrs }">
        <icon
          class="filter-icon d-block ml-auto mr-5 mb-3"
          @click="filterProfiles = !filterProfiles"
          v-bind="filterAttrs"
          v-on="filter"
          large
          outlined
          color="primary"
          :icon="['fas', 'sliders-h']"
        />
      </template>
      <v-card>
        <v-card-title>
          <h3>Filter Profiles</h3>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="3">
                <v-switch label="Male"></v-switch>
              </v-col>
              <v-col cols="12" sm="3">
                <v-switch label="Female"></v-switch>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  ref="country"
                  v-model="country"
                  :items="countries"
                  label="Country"
                  placeholder="Select..."
                  required
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" sm="6">
                <v-slider
                  v-model="minAge"
                  label="From"
                  min="16"
                  max="100"
                  thumb-label
                ></v-slider
              ></v-col>
              <v-col cols="12" sm="6"
                ><v-slider
                  v-model="maxAge"
                  label="To"
                  min="16"
                  max="100"
                  thumb-label
                ></v-slider
              ></v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="white--text" color="red" @click="filterProfiles = false"
            >Cancel</v-btn
          >
          <v-btn color="primary" @click="filterProfiles = false">Filter</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-divider></v-divider>

    <v-row class="mt-6">
      <v-col class="mt-5" cols="12" md="4">
        <v-card class="mx-auto" max-width="335">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
          ></v-img>

          <v-card-title>
            Tajeddine Alaoui
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
                  cols="30"
                  rows="10"
                ></v-textarea>

                <v-card-actions>
                  <v-btn
                    class="white--text d-block ml-auto"
                    @click="msgDialog = false"
                    color="red"
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
  </v-container>
</template>

<script>
export default {
  data: () => ({
    filterProfiles: false,
    msgDialog: false,
    message: '',
    minAge: null,
    maxAge: null,
    countries: ['Morocco', 'United Kingdom'],
    country: null,
  }),
}
</script>

<style lang="scss" scoped>
.filter-icon {
  font-size: 1.7rem;
}

.filter-icon:hover {
  @include genericHover;
}
</style>
