export default function (context) {
  const userLocalStorage = localStorage.getItem('user')

  if (!userLocalStorage) {
    return context.store.commit('auth/CLEAR_USER_DATA')
  }

  const jwtData = JSON.parse(userLocalStorage)

  // If the user have local storage we recomit it's data
  context.store.commit('auth/SET_USER_DATA', jwtData)

  // TODO Put it in middleware
  context.$axios.interceptors.response.use(
    (response) => response,
    (error) => {
      //   console.log(error.response)
      if (error.response.status === 401) {
        context.store.dispatch('auth/logout')
      }
      return Promise.reject(error)
    }
  )
}
