<template>
  <v-container>
    <v-card color="primary" id="profile-img-wrapper">
      <img class="" src="/avatar.png" alt="profile-img" />
    </v-card>
    <v-row>
      <v-col cols="12" class="account-header">
        <h1 id="username">{{ profile.username }}</h1>
        <v-subheader style="height: 13px" id="age-location"
          >{{ profile.birthday }}, {{ profile.country }}</v-subheader
        >
      </v-col>
    </v-row>
    <!-- Cards -->
    <section class="mt-5">
      <v-tabs>
        <v-tab>
          <v-icon left>mdi-rss</v-icon>
          Feed
        </v-tab>
        <v-tab-item>
          <!-- Component -->
        </v-tab-item>

        <v-tab>
          <v-icon left>mdi-account</v-icon>
          About
        </v-tab>
        <v-tab-item>
          <LazyAboutTab :profile="profile" />
        </v-tab-item>

        <v-tab>
          <v-icon left>mdi-image-multiple</v-icon>
          Gallery
        </v-tab>
        <v-tab-item>
          <!-- Component -->
        </v-tab-item>

        <v-tab>
          <v-icon left>mdi-account-group</v-icon>
          Friends
        </v-tab>
        <v-tab-item>
          <!-- Component -->
        </v-tab-item>
      </v-tabs>
    </section>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $axios, store, params }) {
    const data = {
      userId: params.profile,
    }

    try {
      const profile = await $axios.$get('/profile', {
        params: data,
      })

      return { profile }
    } catch (error) {
      console.log(error)
      return { error }
    }
  },
  data: () => ({
    isEdit: false,
    tab: null,
    // !
    tabnames: ['About', 'Gallery', 'Friends'],
    // profileQuestions: [],
  }),
  methods: {
    async patchProfile() {
      try {
        this.$nuxt.$loading.start()

        const userId = this.$store.state.auth.id
        const profile = this.profileQuestions

        const data = {
          userId,
          profile,
        }

        await this.$axios.patch('/profile', data)

        this.isEdit = false

        this.$nuxt.$loading.finish()
      } catch (e) {}
    },
  },
}
</script>

<style lang="scss" scoped>
#profile-img-wrapper {
  border-radius: 5px;
  height: 255px;

  img {
    height: 225px;
    width: 225px;
    position: relative;
    top: 24%;
    margin: 0 auto;
  }
}

img,
#username,
#age-location {
  display: flex;
  justify-content: center;
}

.account-header {
  margin-top: 1.5%;
}

#edit-icon {
  display: flex;
  margin-left: auto;
}

input:hover {
  cursor: pointer;
}

.save-edit {
  // width: 100px;
  display: block;
  margin-left: auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.3s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 960px) {
  .account-header {
    margin-top: 6.1%;
  }
}
</style>
