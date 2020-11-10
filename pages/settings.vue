<template>
  <v-container fluid>
    <v-card>
      <v-toolbar flat color="primary">
        <v-toolbar-title>Settings</v-toolbar-title>
      </v-toolbar>
      <v-tabs>
        <v-tab>
          <v-icon left>mdi-account</v-icon>
          My Account
        </v-tab>

        <!-- <v-tab>
          <v-icon left>mdi-credit-card</v-icon>
          Subscriptions
        </v-tab> -->

        <v-tab-item>
          <v-card flat>
            <LazySettingsCards :settings="settings" />
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat> </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $axios, store }) {
    const userId = store.state.auth.id

    try {
      const settings = await $axios.$get('/settings', {
        userId,
      })

      return { settings }
    } catch (error) {
      console.log(error)
      return { error }
    }
  },
}
</script>
