<template>
  <v-footer class="mt-12">
    <v-col class="text-center" cols="12">
      <div id="footer-content">
        Copyright @{{ new Date().getFullYear() }} - Developed by -
        <strong>
          <a
            href="https://devtaj.com/"
            target="_blank"
            rel="noopener"
            role="button"
            >devtaj.com</a
          ></strong
        >
      </div>
    </v-col>
  </v-footer>
</template>

<style lang="scss" scoped>
#footer-content {
  font-size: 0.9rem;
}
</style>
