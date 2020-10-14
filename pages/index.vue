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
          <v-btn @click="filterProfiles = false">Cancel</v-btn>
          <v-btn color="primary" @click="filterProfiles = false">Filter</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-divider></v-divider>

    <v-row class="mt-6">
      <v-col v-for="user in users" :key="user.id" class="mt-5" cols="12" md="3">
        <v-card class="mx-auto" max-width="339">
          <v-img src="/desktop-bg.png" height="200px"></v-img>

          <v-card-title>
            {{ user.username }}
            <v-card-subtitle> {{ user.birthday }} </v-card-subtitle>
          </v-card-title>

          <!-- TODO add city too -->
          <v-card-subtitle class="pb-0"> {{ user.country }} </v-card-subtitle>

          <v-card-actions>
            <v-btn to="/profile" text>View Profile</v-btn>
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
  </v-container>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      let users = await $axios.$get('/users')

      return { users }
    } catch (error) {
      console.log(error)
    }
  },
  data: () => ({
    users: [],
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
