<template>
  <v-btn
    small
    v-if="!$device.isDesktop"
    class="mr-2"
    color="primary"
    icon
    @click="closeModal"
  >
    <icon :icon="['fas', 'times']" />
  </v-btn>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$store.commit('closeModal')
    },
  },
}
</script>
