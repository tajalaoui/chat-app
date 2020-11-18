<template>
  <v-form @submit.prevent="patchProfile">
    <v-list class="mt-5" three-line subheader>
      <!-- v-if="this.$route.params.profile = this.$store.state.auth.id" -->
      <v-row>
        <v-col cols="12">
          <v-card class="my-3" v-for="profile in profile" :key="profile.id"
            ><v-list-item>
              <v-list-item-content>
                <v-list-item-title>{{ profile.title }}</v-list-item-title>
                <v-textarea
                  v-if="isEdit"
                  rows="1"
                  filled
                  auto-grow
                  v-model="profile.subtitle"
                >
                </v-textarea>

                <v-list-item-subtitle v-else>{{
                  profile.subtitle
                }}</v-list-item-subtitle>
              </v-list-item-content>

              <v-btn @click="isEdit = !isEdit" id="edit-icon" icon
                ><v-icon>mdi-pencil</v-icon></v-btn
              >
            </v-list-item>
          </v-card>
          <v-card class="mb-7">
            <LazyProfileCombobox />
          </v-card>
          <v-row>
            <v-col class="ml-auto mr-3" cols="6">
              <transition name="fade">
                <v-btn
                  class="save-edit"
                  v-if="isEdit"
                  id="save-btn"
                  color="primary"
                  x-large
                  type="submit"
                  >Save</v-btn
                >
              </transition>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-list>
  </v-form>
</template>

<script>
export default {
  props: {
    profile: Array,
  },
}
</script>

<style></style>
