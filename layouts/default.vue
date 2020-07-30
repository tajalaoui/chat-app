<template>
  <v-app>
    <v-navigation-drawer color="#ff7043" app permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title brand-name">
            Taj-Chat
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list nav>
        <v-avatar class="d-block mx-auto" id="avatar">
          <img src="/icon.png" alt="nav-profile-img" />
        </v-avatar>
        <v-list-item-content class="username mb-3">
          <v-list-item-title class="title">
            Tajeddine
          </v-list-item-title>
        </v-list-item-content>
        <v-divider></v-divider>

        <nuxt-link v-for="item in items" :key="item.title" :to="item.to">
          <v-list-item link>
            <v-list-item-icon>
              <icon :icon="item.icon" />
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>

        <!-- Settings -->
        <nuxt-link to="/welcome"
          ><v-list-item
            link
            style="position: absolute; bottom: 3%; width: 95%;"
          >
            <v-list-item-icon>
              <icon :icon="['fas', 'power-off']" />
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Log Out</v-list-item-title>
            </v-list-item-content>
          </v-list-item></nuxt-link
        >
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <nuxt />
    </v-main>

    <LazyVfooter />
  </v-app>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: 'Feed', to: '/feed', icon: 'rss' },
      { title: 'Browse', to: '/browse', icon: 'search' },
      { title: 'Profile', to: '/profile', icon: 'user' },
      { title: 'Messages', to: '/messages', icon: 'comment-dots' },
      { title: 'Settings', to: '/settings', icon: 'cog' },
    ],
  }),
}
</script>

<style lang="scss" scoped>
// a:hover,
// .nuxt-link-exact-active {
//   background: rgb(95, 10, 207);
//   // transition: $transition;
// }
#avatar {
  height: 85px !important;
  width: 85px !important;
}

.title {
  font-family: 'Roboto Mono' !important;
}
</style>
