export const state = () => ({
  msgDialog: false,
})

// Uppercase mutations
export const mutations = {
  // todo To remove
  toggleDialog(state) {
    state.msgDialog = !msgDialog
  },
  openModal(state) {
    state.msgDialog = true
  },
  closeModal(state) {
    state.msgDialog = false
  },
}
