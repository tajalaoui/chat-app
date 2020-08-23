<template>
  <v-app>
    <v-navigation-drawer
      :width="$device.isTablet || $device.isMobile ? 49 : 200"
      color="primary"
      app
      permanent
      stateless
    >
      <v-list-item class="hidden-sm-and-down">
        <v-list-item-content>
          <v-list-item-title class="title brand-name">
            <h3 class="d-flex mx-auto">
              <nuxt-link to="/">globipals</nuxt-link>
            </h3>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list nav>
        <v-avatar style="width: 100%;" class="mt-sm-and-up-7" size="62">
          <nuxt-link to="/profile"
            ><img
              class="title"
              id="avatar"
              src="/profile-icon.png"
              alt="nav-profile-img"
          /></nuxt-link>
        </v-avatar>
        <v-list-item-content class="username mb-sm-and-up-3 hidden-sm-and-down">
          <v-list-item-title class="title">
            <h5>Tajeddine</h5>
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

    <LazyTheFooter />
  </v-app>
</template>

<script>
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
.v-navigation-drawer {
  font-family: 'Montserrat';
}
.title {
  display: flex;
  justify-content: center;
}

#avatar {
  vertical-align: middle;
  width: 62px;
  height: 62px;
  border-radius: 50%;
}

.v-list-item__icon {
  margin-right: 5px !important;
}

@media (max-width: 960px) {
  #avatar {
    width: 33px;
    height: 33px;
    margin-right: 29px;
  }
}
</style>
