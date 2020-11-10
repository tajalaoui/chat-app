<template>
  <v-container fluid>
    <!-- Mobile msg -->
    <!-- Use props and events -->
    <LazyMsgMobile v-if="!$device.isDesktop" />
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

              <v-list-item v-else :key="item.title" @click="openModal">
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
        <LazyMsg />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  mounted() {
    this.$axios.$post('/message')
  },
  data: () => ({
    items: [
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Brunch this weekend?',
        subtitle:
          "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
      },
      { divider: true, inset: true },
    ],
  }),
  methods: {
    openModal() {
      this.$store.commit('mobileModal/openModal')
    },
  },
}
</script>
