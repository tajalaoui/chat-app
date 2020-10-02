export default function ({ app, redirect }) {
  const userCookie = app.$cookies.get('user')
  if (!userCookie) {
    return redirect('/welcome')
  }
}
