<template>
  <v-row justify="center">
    <v-dialog
      v-model="msgDialog"
      fullscreen
      persistent
      hide-overlay
      overlay-opacity="1"
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ msgDialog, attrs }">
        <LazyCloseChatBtn v-show="msgDialog" v-bind="attrs" v-on="msgDialog" />
      </template>
      <LazyMsgBox />
    </v-dialog>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['msgDialog']),
  },
}
</script>
