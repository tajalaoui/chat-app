<template>
  <v-btn
    v-if="!$device.isDesktop"
    class="mr-1"
    color="primary"
    icon
    @click="closeModal"
  >
    <icon :icon="['fas', 'times']" />
  </v-btn>
</template>

<script>
import { mapState } from 'vuex'
export default {
  methods: {
    closeModal() {
      this.$store.commit('closeModal')
    },
  },
  computed: {
    ...mapState['msgDialog'],
  },
}
</script>
