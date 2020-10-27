export const state = () => ({
  isAuthenticated: false,
  id: null,
  token: null,
  username: null,
})

export const mutations = {
  SET_USER_DATA(state, data) {
    let { id, token, username } = data

    state.isAuthenticated = true
    state.id = id
    state.token = token
    state.username = username

    // * Dev
    this.$cookies.set('user', data)

    // * Prod
    // this.$cookies.set('user', data, {
    //   sameSite: Strict,
    //   secure: true,
    // })

    this.$axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

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
      .post('/signup', credentials)
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
