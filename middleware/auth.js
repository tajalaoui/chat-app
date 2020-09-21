export default function ({ store }) {
  if (!store.state.isAuthenticated) {
    // store.dispatch('logout')
    console.log(store.state.isAuthenticated + ' <- not logged in...')
  }
}
