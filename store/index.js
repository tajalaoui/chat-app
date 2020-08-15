export const state = () => ({
  msgDialog: false,
})

export const mutations = {
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
