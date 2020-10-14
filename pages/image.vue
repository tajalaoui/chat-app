<template>
  <v-file-input
    @change="upload"
    :rules="avatar"
    accept="image/png, image/jpeg, image/jpg"
    placeholder="Pick an avatar"
    prepend-icon="mdi-camera"
  ></v-file-input>
</template>

<script>
export default {
  data: () => ({
    avatar: [
      (value) =>
        !value ||
        value.size < 2000000 ||
        'Picture size should be less than 2 MB!',
    ],
  }),
  methods: {
    async upload(pic) {
      let formData = new FormData()
      formData.append('picture', pic)

      const userId = this.$store.state.auth.id
      formData.append('userId', userId)

      try {
        await this.$axios.post('/avatar', formData)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
