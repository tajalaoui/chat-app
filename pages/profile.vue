<template>
  <v-container>
    <div id="profile-img-wrapper">
      <img class="" src="/profile-icon.png" alt="profile-img" />
    </div>
    <v-row>
      <v-col cols="12" class="account-header">
        <h1 id="username">Tajeddine</h1>
        <v-subheader id="age-location">23, Marrakech</v-subheader>
      </v-col>
    </v-row>
    <v-form>
      <v-list class="mt-5" three-line subheader>
        <v-subheader>Account Details</v-subheader>
        <div id="save-edit">
          <v-btn
            v-if="!isEdit"
            id="edit-btn"
            @click="editBehavior(index)"
            outlined
            color="orange"
            large
            >Edit</v-btn
          >
          <v-btn
            v-if="isEdit"
            id="save-btn"
            @click="isEdit = !isEdit"
            outlined
            color="success"
            large
            >Save</v-btn
          >
        </div>
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
  background: $lightOrange;
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
  margin-top: 2%;
}

input:hover {
  cursor: pointer;
}

// #save-edit {
//   width: 100%;
//   display: flex;
//   margin-left: auto;
// }
</style>
