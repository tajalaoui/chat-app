<template>
  <div>
    <!-- Todo add position fixed -->
    <v-card elevation="3" min-height="750">
      <v-toolbar flat>
        <LazyCloseChatBtn />
        <v-avatar size="53px"
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
      <v-divider class="mt-1"></v-divider>
      <v-card
        id="receiver-msg"
        class="ma-5 d-block mr-auto"
        shaped
        max-width="350"
      >
        <v-card-text
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          corporis odit dolore facilis dignissimos quos deserunt esse ducimus
          cum, ab aliquam laudantium eaque, non, est ea id unde beatae
          dolorum.</v-card-text
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
          corporis odit dolore facilis dignissimos quos deserunt esse ducimus
          cum, ab aliquam laudantium eaque, non, est ea id unde beatae
          dolorum.</v-card-text
        >
      </v-card>
    </v-card>
    <v-card class="mt-1">
      <div>
        <v-row class="align-center">
          <v-col :cols="$device.isDesktop ? 11 : 9"
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
  </div>
</template>

<script>
export default {
  data: () => ({
    userMsgExtras: [{ title: 'Report' }, { title: 'Block' }],
  }),
}
</script>

<style lang="scss" scoped>
.v-card {
  .v-card__text {
    font-weight: bold;
  }
}

.v-avatar {
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
