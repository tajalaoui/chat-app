export default function ({ store }) {
  if (!store.state.isAuthenticated) {
    store.dispatch('logout')
  }
}
