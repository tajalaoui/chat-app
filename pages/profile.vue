<template>
  <v-container>
    <v-card color="primary" id="profile-img-wrapper">
      <img class="" src="/profile-icon.png" alt="profile-img" />
    </v-card>
    <v-row>
      <v-col cols="12" class="account-header">
        <h1 id="username">Tajeddine</h1>
        <v-subheader style="height: 13px;" id="age-location"
          >23, Marrakech</v-subheader
        >
      </v-col>
    </v-row>
    <v-form>
      <v-list class="mt-5" three-line subheader>
        <v-row>
          <v-col cols="6"><v-subheader>Account Details</v-subheader></v-col>
          <v-col cols="6">
            <v-btn
              class="save-edit"
              v-if="!isEdit"
              id="edit-btn"
              @click="editBehavior(index)"
              outlined
              color="primary"
              large
              >Edit</v-btn
            >
            <v-btn
              class="save-edit"
              v-if="isEdit"
              id="save-btn"
              @click="isEdit = !isEdit"
              outlined
              color="primary"
              large
              >Save</v-btn
            >
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <v-card
              ><v-list-item
                v-for="(profile, index) in profileInfo"
                :key="index"
              >
                <v-list-item-content>
                  <v-list-item-title>{{ profile.title }}</v-list-item-title>
                  <v-text-field
                    full-width
                    single-line
                    v-if="isEdit"
                    class="text-field"
                    :value="profile.subtitle"
                  >
                  </v-text-field>

                  <v-list-item-subtitle v-else>{{
                    profile.subtitle
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>
      </v-list>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    isEdit: false,
    profileInfo: [
      {
        title: 'My self-summary',
        subtitle:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatem esse, blanditiis tempore alias aut at quis saepe,consequatur dolor fuga sequi natus.',
      },
      {
        title: 'I spend a lot of time thinking about',
        subtitle: 'Futre for example',
      },
    ],
  }),
  methods: {
    editBehavior(index) {
      this.isEdit = true
    },
  },
}
</script>

<style lang="scss" scoped>
#profile-img-wrapper {
  border-radius: 5px;
  height: 250px;

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

@media (max-width: 960px) {
  .account-header {
    margin-top: 6.1%;
  }
}
</style>
