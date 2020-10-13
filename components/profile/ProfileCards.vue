<template>
  <v-form @submit.prevent="saveInfos">
    <v-list class="mt-5" three-line subheader>
      <v-row>
        <v-col class="ml-auto mr-3" cols="6">
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
</template>

<script>
export default {
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
input:hover {
  cursor: pointer;
}

.save-edit {
  // width: 100px;
  display: block;
  margin-left: auto;
}
</style>
