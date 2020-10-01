<template>
  <v-row justify="center">
    <v-dialog
      v-if="$device.isMobile"
      v-model="msgDialog"
      fullscreen
      persistent
      hide-overlay
      overlay-opacity="1"
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ msgDialog, attrs }">
        <LazyMsgCloseBtn v-show="msgDialog" v-bind="attrs" v-on="msgDialog" />
      </template>
      <LazyMsg />
    </v-dialog>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('mobileModal', ['msgDialog']),
  },
}
</script>
