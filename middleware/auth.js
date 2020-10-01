export default function ({ store, redirect }) {
  if (!store.getters['auth/getIsAuthenticated']) {
    console.log('not logged in')
    return redirect('/welcome')
  }
}
