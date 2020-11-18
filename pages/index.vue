<template>
  <v-container>
    <v-dialog v-model="filterModal" persistent max-width="650px">
      <template v-slot:activator="{ filter, filterAttrs }">
        <icon
          class="filter-icon d-block ml-auto mr-5 mb-3"
          @click="filterModal = true"
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
          <v-btn @click="filterModal = false">Cancel</v-btn>
          <v-btn color="primary" @click="filterProfiles">Filter</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-divider></v-divider>
    <!-- Card for each user -->
    <section><LazyUserCard :users="users" /></section>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $axios, store }) {
    const token = store.state.auth.token

    try {
      let users = await $axios.$get('/users')

      return { users }
    } catch (error) {
      console.log(error)
    }
  },
  // async fetch() {
  //   const token = this.$store.state.auth.token

  //   console.log('token ?', token)

  //   const users = await fetch('http://localhost:3000/users', {
  //     method: 'GET',
  //     //body: JSON.stringify({}),
  //     headers: {
  //       //'Content-Type': 'application/json',
  //       Authorization: `Bearer ${token}`,
  //     },
  //     //credentials: 'include',
  //   })
  //     .then(function (res) {
  //       if (res.status >= 200 && res.status < 300) {
  //         return res
  //       } else {
  //         console.log(res.statusText)
  //       }
  //     })
  //     .then((res) => res.json())

  //   this.users = users
  // },
  data: () => ({
    users: [],
    filterModal: false,
    minAge: null,
    maxAge: null,
    countries: ['Morocco', 'United Kingdom'],
    country: null,
  }),
  methods: {
    filterProfiles() {
      // this.$axios.$get('/user')
    },
  },
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
