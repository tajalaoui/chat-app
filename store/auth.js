export const state = () => ({
  isAuthenticated: false,
  user: null,
})

export const mutations = {
  SET_USER_DATA(state, jwtData) {
    state.isAuthenticated = true
    state.user = jwtData

    // * Dev
    this.$cookies.set('user', jwtData)

    // * Prod
    // this.$cookies.set('user', jwtData, {
    //   sameSite: Strict,
    //   secure: true,
    // })

    this.$axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${jwtData.token}`

    this.$router.push('/')
  },
  CLEAR_USER_DATA(state) {
    state.user = null
    state.isAuthenticated = false

    this.$cookies.remove('user')

    this.$axios.defaults.headers.common['Authorization'] = null

    this.$router.push('/welcome')
  },
}

export const actions = {
  register({ commit }, credentials) {
    return this.$axios
      .post('/register', credentials)
      .then(({ data }) => {
        commit('SET_USER_DATA', data)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  login({ commit }, credentials) {
    return this.$axios.post('/login', credentials).then(({ data }) => {
      commit('SET_USER_DATA', data)
    })
  },
}

export const getters = {
  getIsAuthenticated(state) {
    return !!state.user
  },
}
