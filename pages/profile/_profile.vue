<template>
  <v-container>
    <v-card color="primary" id="profile-img-wrapper">
      <img class="" src="/avatar.png" alt="profile-img" />
    </v-card>
    <v-row>
      <v-col cols="12" class="account-header">
        <h1 id="username">Tajeddine</h1>
        <v-subheader style="height: 13px" id="age-location"
          >23, Marrakech</v-subheader
        >
      </v-col>
    </v-row>
    <!-- Cards -->
    <section>
      <v-form @submit.prevent="saveInfos">
        <v-list class="mt-5" three-line subheader>
          <v-row>
            <v-col class="ml-auto mr-3" cols="6">
              <transition name="fade">
                <v-btn
                  class="save-edit"
                  v-if="!isEdit"
                  id="edit-btn"
                  color="primary"
                  large
                  @click="editInfos"
                  >Edit</v-btn
                >
                <v-btn
                  class="save-edit"
                  v-if="isEdit"
                  id="save-btn"
                  color="primary"
                  large
                  type="submit"
                  >Save</v-btn
                >
              </transition>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12">
              <v-card
                class="my-3"
                v-for="(profile, index) in profileInfo"
                :key="index"
                ><v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>{{ profile.title }}</v-list-item-title>
                    <v-textarea
                      filled
                      auto-grow
                      v-if="isEdit"
                      v-model="profile.subtitle"
                    >
                    </v-textarea>

                    <v-list-item-subtitle v-else>{{
                      profile.subtitle
                    }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
              <v-card class="mb-7">
                <LazyProfileCombobox />
              </v-card>
            </v-col>
          </v-row>
        </v-list>
      </v-form>
    </section>
  </v-container>
</template>

<script>
export default {
  // async asyncData({ $axios, params }) {
  //   try {
  //     const userId = params.profile
  //     let profile = await $axios.$get('/profile', userId)
  //     console.log(userId)
  //     return { profile }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // },

  data: () => ({
    isEdit: false,
    profileInfo: [
      {
        title: 'My self-summary',
        subtitle:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatem esse, blanditiis tempore alsias aut at quis saepe,consequatur dolor fuga sequi natus.',
      },
      {
        title: 'I spend a lot of time thinking about',
        subtitle: 'Futre for example',
      },
      { title: 'Languages i want to learn', subtitle: 'Javascript' },
      { title: 'things i could never live without', subtitle: 'Pc' },
      { title: 'My golden rule', subtitle: 'Stay positive' },
      { title: 'My next big trip', subtitle: 'Japan' },
    ],
  }),
  methods: {
    editInfos() {
      this.isEdit = true
    },
    async saveInfos() {
      try {
        this.$nuxt.$loading.start()

        const userId = this.$store.state.auth.id
        const profileInfo = this.profileInfo

        const data = {
          userId,
          profileInfo,
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
  transition: opacity 5s;
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
