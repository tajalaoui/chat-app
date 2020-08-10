<template>
  <v-app>
    <v-navigation-drawer
      :width="[$device.isTablet || $device.isMobile ? 45 : 215]"
      color="success"
      app
      permanent
      disable-resize-watcher="true"
      expand-on-hover="true"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title brand-name">
            Taj-Chat
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list nav>
        <v-avatar class="d-block mx-auto">
          <img src="/profile-icon.png" alt="nav-profile-img" />
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
// let pageWidth = width: window.innerWidth || document.body.clientWidth
export default {
  data: () => ({
    items: [
      { title: 'Feed', to: '/', icon: 'rss' },
      { title: 'Browse Profiles', to: '/browse', icon: 'search' },
      { title: 'Messages', to: '/messages', icon: 'comment-dots' },
      { title: 'Profile', to: '/profile', icon: 'user' },
      { title: 'Settings', to: '/settings', icon: 'cog' },
    ],
    isDeviceSmall: false,
  }),
}
</script>

<style lang="scss" scoped>
#avatar {
  height: 85px !important;
  width: 85px !important;
}

img {
  z-index: 5 !important;
}

.title {
  font-family: 'Roboto Mono' !important;
}
</style>
