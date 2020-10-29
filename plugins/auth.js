export default function (context) {
  // const userCookie = context.app.$cookies.get('user')
  // // Todo Maybe populate vuex from cookie using nuxtServerInit ?
  // if (!userCookie) {
  //   return context.store.commit('auth/CLEAR_USER_DATA')
  // }

  // // * To set userData in vuex
  // // If the user a cookie storage we recomit it's data
  // context.store.commit('auth/SET_USER_DATA', userCookie)

  // TODO Put it in middleware ?
  // TODO Maybe check if errors occured redirect to a page ?
  // context.$axios.interceptors.response.use(
  //   (response) => response,
  //   (error) => {
  //     //   console.log(error.response)
  //     if (error.response.status === 401) {
  //       context.store.dispatch('auth/logout')
  //     }
  //     return Promise.reject(error)
  //   }
  // )
}
