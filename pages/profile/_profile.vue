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
    <section>
      <v-form @submit.prevent="patchProfile">
        <v-list class="mt-5" three-line subheader>
          <!-- v-if="this.$route.params.profile = this.$store.state.auth.id" -->
          <v-row>
            <v-col cols="12">
              <v-card class="my-3" v-for="profile in profile" :key="profile.id"
                ><v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>{{ profile.title }}</v-list-item-title>
                    <v-textarea
                      v-if="isEdit"
                      rows="1"
                      filled
                      auto-grow
                      v-model="profile.subtitle"
                    >
                    </v-textarea>

                    <v-list-item-subtitle v-else>{{
                      profile.subtitle
                    }}</v-list-item-subtitle>
                  </v-list-item-content>

                  <v-btn @click="isEdit = !isEdit" id="edit-icon" icon
                    ><v-icon>mdi-pencil</v-icon></v-btn
                  >
                </v-list-item>
              </v-card>
              <v-card class="mb-7">
                <LazyProfileCombobox />
              </v-card>
              <v-row>
                <v-col class="ml-auto mr-3" cols="6">
                  <transition name="fade">
                    <v-btn
                      class="save-edit"
                      v-if="isEdit"
                      id="save-btn"
                      color="primary"
                      x-large
                      type="submit"
                      >Save</v-btn
                    >
                  </transition>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-list>
      </v-form>
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
    top: 25%;
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
