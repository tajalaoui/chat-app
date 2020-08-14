<template>
  <v-container fluid>
    <v-row>
      <v-col :cols="!$device.isDesktop ? 12 : 3">
        <v-card class="mx-auto">
          <v-list three-line>
            <template v-for="(item, index) in items">
              <v-divider
                v-if="item.divider"
                :key="index"
                :inset="item.inset"
              ></v-divider>

              <v-list-item v-else :key="item.title" @click="">
                <v-list-item-avatar>
                  <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title v-html="item.title"></v-list-item-title>
                  <v-list-item-subtitle
                    v-html="item.subtitle"
                  ></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </v-card>
      </v-col>
      <v-col v-if="$device.isDesktop">
        <!-- Todo add position fixed -->
        <v-card elevation="3" min-height="750">
          <v-toolbar flat>
            <v-avatar size="55px"
              ><img src="https://cdn.vuetifyjs.com/images/lists/1.jpg" alt=""
            /></v-avatar>
            <h5 class="pa-3">Ali Connors</h5>
            <v-spacer></v-spacer>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" icon
                  ><icon :icon="['fas', 'ellipsis-v']"
                /></v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, index) in userMsgExtras"
                  :key="index"
                  @click=""
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-toolbar>
          <v-divider></v-divider>
          <v-card
            id="receiver-msg"
            class="ma-5 d-block mr-auto"
            shaped
            max-width="350"
          >
            <v-card-text
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              corporis odit dolore facilis dignissimos quos deserunt esse
              ducimus cum, ab aliquam laudantium eaque, non, est ea id unde
              beatae dolorum.</v-card-text
            >
          </v-card>
          <v-card
            id="sender-msg"
            class="ma-5 d-block ml-auto"
            color="primary"
            shaped
            max-width="350"
          >
            <v-card-text
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              corporis odit dolore facilis dignissimos quos deserunt esse
              ducimus cum, ab aliquam laudantium eaque, non, est ea id unde
              beatae dolorum.</v-card-text
            >
          </v-card>
        </v-card>
        <v-card class="mt-1">
          <div>
            <v-row class="align-center">
              <v-col cols="11"
                ><v-textarea
                  filled
                  class="pa-3"
                  rows="2"
                  type="text"
                  placeholder="Type a message..."
                ></v-textarea
              ></v-col>
              <v-col cols="1">
                <v-btn class="pa-3" color="primary"
                  ><icon alt="send" :icon="['fas', 'paper-plane']" /></v-btn
              ></v-col>
            </v-row>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Brunch this weekend?',
        subtitle:
          "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle:
          "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Oui oui',
        subtitle:
          "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Birthday gift',
        subtitle:
          "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?",
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Recipe to try',
        subtitle:
          "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
      },
    ],
    userMsgExtras: [{ title: 'Report' }, { title: 'Block' }],
  }),
}
</script>

<style lang="scss" scoped>
.v-avatar {
  img {
    width: 100%;
    height: 100%;
  }
}

.v-card {
  .v-card__text {
    font-weight: bold;
  }
}
</style>
